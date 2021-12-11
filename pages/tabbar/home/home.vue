<template>
	<view>
		<c-sticky>
			<c-status-bar />
			<c-page-header title="首页" :can-back="false">
				<view>
					<text class="mr-5 iconfont icon-sousuo page-header-icon" @tap="toSearchPage" />
					<text class="iconfont icon-bianji page-header-icon" @tap="toEditorPage" />
				</view>
			</c-page-header>
		</c-sticky>

		<unicloud-db v-slot="{ data, error }" collection="topics" :page-size="4" field="title,cover.url as url,create_date" orderby="create_date desc" ref="topics">
			<c-error-tip v-if="error" :msg="error.message" />
			<view v-else><c-banner :values="data" /></view>
		</unicloud-db>

		<c-desc title="实时" />

		<unicloud-db v-slot="{ data, loading, error, hasMore }" collection="posts,uni-id-users,topics" :field="`create_date,arrayElemAt(author.username, 0) as username,arrayElemAt(author._id, 0) as authorID,arrayElemAt(author.avatar, 0) as avatarUrl,title,imgs,topic_ids.title as topics,size(praise_user_ids._id) as praiseNum,in('${uid}', praise_user_ids._id) as praiseStatus,size(love_user_ids._id) as loveNum,in('${uid}', love_user_ids._id) as loveStatus`" orderby="create_date desc" ref="posts">
			<c-error-tip v-if="error" :msg="error.message"></c-error-tip>
			<view v-else>
				<c-posts :values="data" @praise="praise" @love="love" @toPost="toPostPage" @countComment="countComment" @toUser="toUserPage"/>
				<c-scroll-load-more :loading="loading" :hasMore="hasMore"></c-scroll-load-more>
			</view>
		</unicloud-db>
		<!-- #ifndef H5 -->
		<c-back-top />
		<!-- #endif -->
		<!-- #ifdef H5 -->
		<c-back-top bottom="calc(50px + 50rpx)" />
		<!-- #endif -->
	</view>
</template>

<script>
import BackTopMixin from '@/components/c-back-top/c-back-top-mixin.js'
export default {
	mixins: [BackTopMixin],
	data() {
		const { uid } = uniCloud.getCurrentUserInfo()
		return {
			uid
		}
	},
	async onPullDownRefresh() {
		const warp = (ref = {}) => {
			return new Promise(resolve => {
				if(ref.loadData){
					ref.loadData({
						clear: true
					}, resolve)
				} 
			})
		}
		await Promise.all([warp(this.$refs.topics),warp(this.$refs.posts)])
		uni.$emit('countComment')
		uni.stopPullDownRefresh()
	},
	destroyed() {
		uni.$off('getPost')
		uni.$off('countComment')
	},
	onReachBottom() {
		this.$refs.posts.loadMore()
	},
	methods: {
		toUserPage(v){
			// 生产环境
			uni.$once('userDetail',fn => fn(v))
			// 开发环境
			// uni.setStorageSync('userDetail',v)
			uni.navigateTo({
				url: '/pages/user/user'
			})
		},
		toPostPage(v){
			// 生产环境
			uni.$once('getPost',fn => fn(v))
			// 开发环境
			// uni.setStorageSync('post',v)
			uni.navigateTo({
				url: '/pages/post/post'
			})
		},
		countComment(useCount,vid){
			const run = async () => {
				const total = await this.$A.comment.countTotalComment({
					_id:vid
				})
				useCount(total)
			}
			uni.$on('countComment',run)
			run()
		},
		toSearchPage() {
			uni.navigateTo({
				url: '/pages/search/search'
			})
		},
		toEditorPage() {
			uni.navigateTo({
				url: '/pages/editor/editor'
			})
		},
		async praise(op) {
			const { postID, praiseStatus, fail, success, complete } = op
			try{
				const request = this.$A.post.praise({
					uid: this.uid,
					postID,
					praiseStatus
				})
				await this.$U.delayRequest(request)
				success()
			}catch(e){
				fail(e.message)
			} finally {
				complete()
			}
		},
		async love(op) {
			const { postID, loveStatus, fail, success, complete } = op
			try{
				const request = await this.$A.post.love({
					uid: this.uid,
					postID,
					loveStatus
				})
				await this.$U.delayRequest(request)
				success()
			}catch(e){
				fail(e.message)
			} finally {
				complete()
			}
		}
	}
}
</script>

<style scoped>
.page-header-icon {
	font-size: 45rpx;
}
</style>
