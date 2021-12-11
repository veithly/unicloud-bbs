<template>
	<view>
		<c-sticky>
			<c-status-bar />
			<c-page-header title="搜索" />
		</c-sticky>
		<c-search-bar @confirm="onSearchConfirm"></c-search-bar>
		<unicloud-db :where="searchRule" v-slot="{ data, loading, error, hasMore }" collection="posts,uni-id-users,topics" :field="field" orderby="create_date desc" ref="posts">
			<c-error-tip v-if="error" :msg="error.message"></c-error-tip>
			<view v-else>
				<c-posts :values="data" @praise="praise" @love="love" @toPost="toPostPage" @countComment="countComment" @toUser="toUserPage"/>
				<c-scroll-load-more :loading="loading" :hasMore="hasMore"></c-scroll-load-more>
			</view>
		</unicloud-db>
		<c-back-top></c-back-top>
	</view>
</template>

<script>
	import BackTopMixin from '@/components/c-back-top/c-back-top-mixin.js'
	export default {
		mixins: [BackTopMixin],
		data() {
			const { uid } = uniCloud.getCurrentUserInfo()
			const field = `create_date,arrayElemAt(author.username, 0) as username,arrayElemAt(author._id, 0) as authorID,arrayElemAt(author.avatar, 0) as avatarUrl,title,imgs,topic_ids.title as topics,size(praise_user_ids._id) as praiseNum,in('${uid}', praise_user_ids._id) as praiseStatus,size(love_user_ids._id) as loveNum,in('${uid}', love_user_ids._id) as loveStatus`
			return {
				searchText: '',
				uid,
				field
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
			await Promise.all([warp(this.$refs.posts)])
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
		computed: {
			searchRule() {
				return `${new RegExp(this.searchText, 'gi')}.test(title)`
			}
		},
		methods: {
			onSearchConfirm(v) {
				this.searchText = v
			},
			toUserPage(v){
				// 生产环境
				// uni.$once('userDetail',fn => fn(v))
				// 开发环境
				uni.setStorageSync('userDetail',v)
				uni.navigateTo({
					url: '/pages/user/user'
				})
			},
			toPostPage(v){
				// 生产环境
				// uni.$once('getPost',fn => fn(v))
				// 开发环境
				uni.setStorageSync('post',v)
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

<style>

</style>
