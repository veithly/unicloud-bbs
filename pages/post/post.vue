<template>
	<view>
		<c-sticky>
			<c-status-bar />
			<c-header :title="post.title"><view class="iconfont icon-Actions-Controls-open-panel--bottom-32 action-icon" @tap="openPopup" /></c-header>
		</c-sticky>

		<unicloud-db v-slot="{ data, error }" collection="stock" ref="stock" :where="`user_id == '${uid}' && post_id == '${post._id}'`">
			<uni-popup ref="popup" type="bottom">
				<view class="bg-white flex align-center justify-center flex-column popup">
					<view v-if="error">{{ error.message }}</view>
					<c-collect v-else :c_id="data[0] && data[0]._id" @collect="resolveCollect" />
				</view>
			</uni-popup>
		</unicloud-db>

		<view class="m-4 flex justify-between align-center">
			<view class="flex userInfo">
				<c-image :src="post.avatarUrl" class="rounded avatar" />
				<view class="flex flex-column ml-2">
					<text class="font-lg">{{ post.username }}</text>
					<uni-dateformat class="font-sm secondary-color" :date="post.create_date" format="yyyy-MM-dd" :threshold="[60000, 3600000 * 24]" />
				</view>
			</view>
			<view>
				<unicloud-db v-slot="{ data, error }" collection="follows" ref="follows" :where="`user_id == '${uid}' && follow_user_id == '${post.authorID}'`">
					<view v-if="error">{{ error.message }}</view>
					<view v-else><c-follow :f_id="data[0] && data[0]._id" @follow="resolveFollow" /></view>
				</unicloud-db>
			</view>
		</view>

		<!-- 内容区 -->
		<unicloud-db v-slot="{ data, loading, error, hasMore }" collection="posts" :where="`'${post._id}' == _id`" field="content" getone>
			<c-error-tip v-if="error" :msg="error.message" />
			<view v-else>
				<c-scroll-load-more v-if="loading" :loading="loading" :hasMore="hasMore" class="mt-5" />

				<mp-html
					v-else
					class="m-4 transition-all"
					:content="data && data.content"
					@ready="onMphtmlReady"
					@load="onMphtmlLoad"
					ref="mphtml"
					img-cache
					:container-style="`opacity: ${imgLoadedSuccessStatus ? 1 : 0.4}`"
				/>

				<view class="mx-1 font-sm" v-if="imgLoadedSuccessStatus">
					<text v-for="(u, i) of post.topics" :key="i" class="topic p-1 px-2 mx-2 rounded">{{ u }}</text>
				</view>
			</view>
		</unicloud-db>

		<c-back-top bottom="130rpx" />

		<unicloud-db
			v-slot="{ data, loading, error, hasMore }"
			collection="comments,uni-id-users"
			:where="`post_id == '${post._id}' && comment_type == 0`"
			:field="commentsFiled"
			:page-size="2"
			v-if="imgLoadedSuccessStatus"
			ref="comments"
			orderby="comment_date desc"
		>
			<view v-if="error">{{ error.message }}</view>
			<view v-else class="mt-4">
				<c-desc title="评论" />
				<c-comment v-for="v in data" :key="v._id" :v="v" @praise="resolveCommentPraise" @action="resolveCommentAction" :requestFn="countComment"/>
				<c-scroll-load-more :hasMore="hasMore" :loading="loading" />
			</view>
		</unicloud-db>

		<view style="height: 180rpx;" />

		<view class="position-fixed bottom-0 bg-white w-100 flex align-center px-3" style="height: 110rpx;">
			<view style="width: 450rpx;"><c-post-comment-release @release="postCommentRelease" /></view>

			<view class="iconfont flex align-center" style="width: 24rpx;">
				<view class="ml-4">
					<c-temp v-slot="op" :class="[activeColor(post.praiseStatus)]">
						<text @tap="postPraise(op)" class="icon-dianzan action-icon mr-1" />
						<text v-if="post.praiseNum">{{ post.praiseNum }}</text>
					</c-temp>
				</view>
				<view class="ml-4" @click="toCommentPosition">
					<text class="icon-pinglun action-icon mr-1" />
					<text v-if="totalCommentCount">{{totalCommentCount}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import cHeader from './header.vue'
import cFollow from './follow.vue'
import cCollect from './collect.vue'
import cPostCommentRelease from './post-comment-release.vue'
import BackTopMixin from '@/components/c-back-top/c-back-top-mixin.js'
export default {
	mixins: [BackTopMixin],
	components: {
		cHeader,
		cCollect,
		cFollow,
		cPostCommentRelease,
	},
	destroyed() {
		uni.$emit('clearImgCache')
	},
	onLoad() {
		// 生成环境下
		uni.$emit('getPost', v => this.post = v)

		// 开发环境下
		// this.post = uni.getStorageSync('post')
		
		
		this.refreshHistory()
		
		// 计算文章评论数量
		this.countTotalComment()
	},
	// 下拉刷新
	async onPullDownRefresh() {
		let request
		if (this.$refs.comments) {
			request = new Promise(resolve => {
				this.$refs.comments.loadData({ clear: true }, resolve)
			})
		}

		const delay = new Promise(resolve => {
			setTimeout(resolve, 3000)
		})

		await Promise.race([delay, request])
		
		this.countTotalComment()
		uni.stopPullDownRefresh()
	},
	// 上拉加载
	onReachBottom() {
		if (this.$refs.comments) {
			this.$refs.comments.loadMore()
		}
	},
	data() {
		const { uid } = uniCloud.getCurrentUserInfo()

		const commentsFiled = `arrayElemAt(user_id.username, 0) as username,arrayElemAt(user_id.avatar, 0) as avatarUrl,arrayElemAt(user_id._id, 0) as comment_user_id,comment_content,comment_date,size(praise_user_ids._id) as praiseNum,in('${uid}', praise_user_ids._id) as praiseStatus`

		return {
			uid,
			post: {},
			commentsFiled,
			commentPosition: 0,
			totalCommentCount: 0,
			followLoading: false,
			imgLoadedSuccessStatus: false
		}
	},
	methods: {
		refreshHistory() {
			this.$A.history.update({
				uid: this.uid,
				pid: this.post._id
			})
		},
		toCommentPosition() {
			uni.pageScrollTo({
				scrollTop: this.commentPosition
			})
		},
		async countTotalComment() {
			const total = await this.$A.comment.countTotalComment({
				_id: this.post._id
			})
			
			this.totalCommentCount = total
		},
		async countComment(vm) {
			const { v } = vm 
			const total = await this.$A.comment.countCommentComment({
				_id: v._id
			})
			
			vm.commentCount = total
		},
		resolveCommentAction(v) {
			v.postID = this.post._id
			uni.setStorageSync('mainComment', v)
			
			uni.navigateTo({
				url: '/pages/comment/comment'
			})
		},
		async resolveCommentPraise(op) {
			const { fail, success, complete, payload } = op
			
			const { uid } = this
			try{
				await this.$A.comment.praise({
					uid,
					...payload
				})
				
				success()
			}catch(e){
				fail(e.message)
			} finally {
				complete()
			}
		},
		activeColor(status) {
			return status && 'main-color'
		},
		async postPraise(op) {
			const unloading = op.useLoading()
			const hasPraise = this.post.praiseStatus
			try {
				const request = this.$A.post.praise({
					uid: this.uid,
					postID: this.post._id,
					praiseStatus: this.post.praiseStatus
				})

				await this.$U.delayRequest(request)

				if (hasPraise) {
					this.post.praiseNum--
				} else {
					this.post.praiseNum++
				}
				this.post.praiseStatus = !this.post.praiseStatus

				// 开发环境下才要
				uni.setStorageSync('post', this.post)
			} catch (e) {
				this.$U.notice(e.message)
			} finally {
				unloading()
			}
		},
		async postCommentRelease(op) {
			const { payload, fail, success, complete } = op
			try {
				await this.$A.comment.createPost({
					...payload,
					post_id: this.post._id
				})
				success()
			} catch (e) {
				fail(e.message)
			} finally {
				complete()
			}
		},
		onMphtmlLoad() {
			// 本地缓存
			const maxlen = 100
			const imgCache = this.$refs.mphtml.imgCache
			const shouldClear = imgCache.list.length > maxlen
			if (shouldClear) {
				uni.once('clearImgCache', () => {
					imgCache.clear()
				})
			}
		},
		onMphtmlReady() {
			this.imgLoadedSuccessStatus = true
			
			this.$refs.mphtml.getRect().then(res => {
				this.commentPosition = res.height
			})
		},
		openPopup() {
			this.$refs.popup.open()
		},
		async resolveCollect(op) {
			const { id, fail, success, complete } = op
			const { create, destory } = this.$A.stock

			try {
				if (id) {
					await destory({ id })
				} else {
					await create({ post_id: this.post._id })
				}
				success()
			} catch (e) {
				fail(e.message)
			} finally {
				this.$refs.stock.loadData(
					{
						clear: true
					},
					complete
				)
			}
		},
		async resolveFollow(op) {
			const { id, fail, success, complete } = op
			const { create, destory } = this.$A.follow
			try {
				if (id) {
					await destory({ id })
				} else {
					await create({ follow_user_id: this.post.authorID })
				}
				success()
			} catch (e) {
				fail(e.message)
			} finally {
				this.$refs.follows.loadData({ clear: true }, complete)
			}
		}
	}
}
</script>

<style scoped>
.action-icon {
	font-size: 45rpx;
}

.popup {
	height: 180rpx;
}

.userInfo {
	width: 450rpx;
}

.avatar {
	width: 90rpx;
	height: 90rpx;
}

.topic {
	color: #595959;
	background-color: #f5f5f5;
}
</style>
