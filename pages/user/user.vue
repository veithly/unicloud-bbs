<template>
	<view>
		<c-sticky>
			<c-status-bar></c-status-bar>
			<c-page-header></c-page-header>
		</c-sticky>
		<!-- 用户信息 -->
		<view class="m-4 flex">
			<c-image :src="post.avatarUrl" mode="aspectFill" class="avatar mr-5"></c-image>
			<view style="" class="p-1 user-container">
				<text class="h2">{{post.username}}</text>
				<unicloud-db v-slot="{data, error}" collection="follows" ref="follows" :where="`user_id == '${uid}' && follow_user_id == '${post.authorID}'`">
					<view v-if="error">{{error.message}}</view>
					<view v-else>
				    <c-follow :f_id="data[0] && data[0]._id" @follow="resolveFollow"></c-follow>
					</view>
				</unicloud-db>
			</view>
		</view>
		<!-- 用户统计 -->
		<view class="flex" style="justify-content: space-around;">
			<view class="flex flex-column align-center">
				<text class="h3">{{postNum}}</text>
				<text>帖子</text>
			</view>
			<view class="flex flex-column align-center">
				<text class="h3">{{followNum}}</text>
				<text>关注</text>
			</view>
			<view class="flex flex-column align-center">
				<text class="h3">{{fansNum}}</text>
				<text>粉丝</text>
			</view>
		</view>
		<!-- 帖子展示 -->
		<view class="mt-4">
			<text class="h3 ml-2">近期</text>
			<unicloud-db v-slot="{ data, loading, error, hasMore }" :where="`author._id=='${post.authorID}'`" collection="posts,uni-id-users,topics" :field="field" orderby="create_date desc" ref="posts" :page-size="4">
				<c-error-tip v-if="error" :msg="error.message"></c-error-tip>
				<view v-else class="flex flex-wrap p-2">
					<c-image class="cover m-2 rounded" v-for="v in data" :key="v._id" :src="v.cover" mode="aspectFill" @on-tap="toPostPage(v)"></c-image>
				</view>
			</unicloud-db>
		</view>
	</view>
</template>

<script>
	import cFollow from './follow.vue'
	export default {
		components:{
			cFollow
		},
		data() {
			const {uid} = uniCloud.getCurrentUserInfo()
			const field = `create_date,arrayElemAt(author.username, 0) as username,arrayElemAt(author._id, 0) as authorID,arrayElemAt(author.avatar, 0) as avatarUrl,title,topic_ids.title as topics,size(praise_user_ids._id) as praiseNum,in('${uid}', praise_user_ids._id) as praiseStatus,size(love_user_ids._id) as loveNum,in('${uid}', love_user_ids._id) as loveStatus, arrayElemAt(imgs.url, 0) as cover`
			return {
				post: {},
				uid,
				postNum: 0,
				followNum: 0,
				fansNum: 0,
				field
			}
		},
		onLoad() {
			// 生产环境
			uni.$emit('userDetail', v => this.post = v)
			// 开发环境
			// this.post = uni.getStorageSync('userDetail')
			this.count()
		},
		async onPullDownRefresh() {
			const coverRefresh = new Promise(resolve => {
				this.$refs.posts.loadData({
					clear: true
				},resolve)
			})
			
			const refresh = Promise.all([coverRefresh,this.count()])
			await refresh 
			uni.stopPullDownRefresh()
		},
		methods: {
			async count(){
				await this.countPost()
				await this.countFollow()
				await this.countFans()
			},
			async resolveFollow(op){
				const {id,fail,success,complete} = op
				const {	create,destory } = this.$A.follow
				try{
					if(id){
						await destory({id})
					} else {
						await create({follow_user_id:this.post.authorID})
					}
					success()
				}catch(e){
					fail(e.message)
				}finally{
					this.$refs.follows.loadData({ clear: true }, complete)
				}
			},
			async countPost(){
				try{
					this.postNum = await this.$A.post.countPost({
						author: this.post.authorID
					})
				}catch(e){
					console.log(e.message)
				}
			},
			async countFollow(){
				try{
					this.followNum = await this.$A.follow.countFollow({
						author: this.post.authorID
					})
				}catch(e){
					console.log(e.message)
				}
			},
			async countFans(){
				try{
					this.fansNum = await this.$A.follow.countFans({
						author: this.post.authorID
					})
				}catch(e){
					console.log(e.message)
				}
			},
			toPostPage(v){
				// 生产环境
				uni.$once('getPost',fn => fn(v))
				// 开发环境
				// uni.setStorageSync('post',v)
				uni.navigateTo({
					url: '/pages/post/post'
				})
			}
		}
	}
</script>

<style scoped>
	.avatar {
		width: 250rpx;
		height: 250rpx;
		border-radius: 100%;
	}
	
	.user-container {
		width: 300rpx;
		height: 300rpx;
	}
	
	.cover {
		width: 315rpx;
		height: 350rpx;
	}
</style>
