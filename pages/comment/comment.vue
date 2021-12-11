<template>
	<view>
		<!-- 顶部 -->
		<c-sticky>
			<c-status-bar></c-status-bar>
			<c-page-header title="评论"></c-page-header>
		</c-sticky>
		<!-- 详情页 -->
		<c-comment :selectActive="replyUser===mainComment" :v="mainComment" @praise="resolveCommentPraise" @action="resolveCommentAction"></c-comment>
		<unicloud-db v-slot="{data, loading, error, options, hasMore}" collection="comments,uni-id-users" :where="`reply_comment_id == '${mainComment._id}' && comment_type == 1`" :field="commentsField" :page-size="4" orderby="comment_date desc" ref="comment">
			<view v-if="error">{{error.message}}</view>
			<view v-else>
				<c-desc class="mt-4" title="回复评论"></c-desc>
				<c-comment v-for="v in data" :key="v._id" :v="v" @praise="resolveCommentPraise" @action="resolveCommentAction" :selectActive="replyUser===v" :disabledCommentIcon="true"></c-comment>
				<c-scroll-load-more :hasMore="hasMore" :loading="loading"></c-scroll-load-more>
			</view>
		</unicloud-db>
		<view class="seat"></view>
		<!-- 回复区域 -->
		<view class="position-fixed bottom-0 px-3" style="width: 690rpx;height: 80rpx;">
			<uni-easyinput class="input-bg-color rounded" :inputBorder="false" :placeholder="replyUserName" @confirm="replyComfirm" v-model="replyText"></uni-easyinput>
		</view>
		<c-back-top bottom="90rpx"></c-back-top>
	</view>
</template>

<script>
	import BackTopMixin from "@/components/c-back-top/c-back-top-mixin.js"
	export default {
		mixins: [BackTopMixin],
		data() {
			const { uid } = uniCloud.getCurrentUserInfo()
			const commentsField = `arrayElemAt(user_id.username, 0) as username,arrayElemAt(user_id.avatar, 0) as avatarUrl,arrayElemAt(user_id._id, 0) as comment_user_id,comment_content,comment_date,size(praise_user_ids._id) as praiseNum,in('${uid}',praise_user_ids._id) as praiseStatus,arrayElemAt(reply_user_id.username, 0) as reply_username`
			return {
				commentsField,
				uid,
				mainComment: {},
				replyUser: {},
				replyText: ''
			}
		},
		onReachBottom() {
			this.$refs.comment.loadMore()
		},
		onPullDownRefresh() {
			this.$refs.comment.loadData({
				clear:true
			},uni.stopPullDownRefresh)
		},
		onLoad() {
			this.mainComment = uni.getStorageSync('mainComment')
			this.replyUser = this.mainComment
		},
		computed:{
			replyUserName(){
				const {replyUser} = this
				return `回复: ${replyUser.username}`
			}
		},
		methods: {
			replyComfirm(){
				const hasReply = Boolean(this.replyText.length)
				if (hasReply){
					uni.showModal({
						content: "发布评论",
						confirmText:'确认',
						cancelText:'取消',
						success: async op => {
							const {confirm} = op
							if (confirm) {
								this.$U.loading()
								try{
									const { postID,comment_user_id,_id } = this.replyUser
									await this.$A.comment.createComment({
										post_id: postID,
										comment_content: this.replyText,
										reply_user_id: comment_user_id,
										reply_comment_id: this.mainComment._id
									})
									this.$U.notice("发布成功")
									this.clear()
								}catch(e){
									this.$U.notice(e.message)
								}finally{
									this.$U.hideLoading()
								}
								}
							}
						}
					)
				}
			},
			resolveCommentAction(v){
				this.replyUser = v
			},
			activeColor(status) {
				return status && 'main-color'
			},
			clear(){
				this.replyText = ""
				uni.hideKeyboard()
			},
			async resolveCommentPraise(op){
				const {fail,success,complete,payload} = op
				const {uid} = this
				try{
					await this.$A.comment.praise({
						uid,
						...payload
					})
					success()
				}catch(e){
					fail(e.message)
				}finally{
					complete()
				}
			}
		}
	}
</script>

<style scoped>
	.seat {
		height: 15vh;
	}
</style>
