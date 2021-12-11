<template>
	<view>
		<c-sticky>
			<c-status-bar />
			<c-page-header title="关注" :canBack="false"></c-page-header>
		</c-sticky>
		<!-- 顶部滑动头像 -->
		<unicloud-db v-slot="{ data, loading, error, hasMore }" collection="follows,uni-id-users" :field="followUserFiled" :where="`user_id=='${uid}'`" ref="followUsers" orderby="follow_date desc" @load="handleFollowUserLoad">
			<c-error-tip v-if="error" :msg="error.message"></c-error-tip>
			<view v-else>
				<scroll-view :scroll-into-view="'f'+swiperIndex" scroll-x class="scroll-row followUserRow" scroll-with-animation>
					<view :id="'f'+i" class="scroll-row-item p-1 mx-3 position-relative transition-all" v-for="(v, i) of data" :key="v._id" @click="handleFollowUserClick(i)" :select="i===swiperIndex">
						<c-image :src="v.avatar" class="avatar rounded"/>
						<text class="position-absolute username main-color careful-bg-color px-1 font-sm rounded">{{v.username}}</text>
					</view>
					<view class="scroll-row-item p-1 mx-3 position-relative" v-if="data.length === 0 && !loading">
						<c-image :src="require('@/static/follow/empty.png')" class="avatar rounded" />
						<text class="position-absolute username main-color careful-bg-color px-1 font-sm rounded">未关注任何人</text>
					</view>
				</scroll-view>
				<c-divider></c-divider>
			</view>
		</unicloud-db>
		<!-- 信息页 -->
		<swiper :current="swiperIndex" @change="handleSwiperChange" :style="{height: swiperHeight}">
			<swiper-item v-for="v of users" :key="v._id">
				<unicloud-db v-slot="{ data, loading, error, hasMore }" collection="posts,uni-id-users,topics" :field="postField" orderby="create_date desc" ref="posts" :where="`author._id=='${v.uid}'`">
					<c-error-tip v-if="error" :msg="error.message"></c-error-tip>
					<view v-else>
						<c-scroll :height="swiperHeight" :loading="loading" :hasMore="hasMore" @dropDown="dropDown" @pullUp="pullUp">
							<c-posts :values="data" @praise="praise" @love="love" @toPost="toPostPage" @countComment="countComment" @toUser="toUserPage"/>
						</c-scroll>
					</view>
				</unicloud-db>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			const afk = this.$Q.useFk('author')
			const postField = this.$Q([
				'create_date',
				afk('username'),
				afk('_id','authorID'),
				afk('avatar','avatarUrl'),
				'title',
				'imgs',
				`topic_ids.title|topics`,
				`size(praise_user_ids._id)|praiseNum`,
				`in('${uid}', praise_user_ids._id)|praiseStatus`,
				`size(love_user_ids._id)|loveNum`,
				`in('${uid}', love_user_ids._id)|loveStatus`
			])
			const { uid } = uniCloud.getCurrentUserInfo()
			const ffk = this.$Q.useFk('follow_user_id')
			const followUserFiled = this.$Q([
				'follow_date',
				ffk('_id','uid'),
				ffk('avatar'),
				ffk('username')
			])
			
			return {
				uid,
				postField,
				swiperHeight: 0,
				followUserFiled,
				users: [],
				swiperIndex: 0,
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
		onReachBottom() {
			this.$refs.posts.loadMore()
		},
		onLoad() {
			this.handleRefreshFollowUsers()
			this.calcSwiperHeight()
			this.handleFollowUserLoad()
		},
		destroyed() {
			this.destroyRefreshFollowUsers()
			this.destroyCountComment()
		},
		methods: {
			// 上拉加载
			pullUp(){
				this.$refs.posts[this.swiperIndex].loadMore()
			},
			// 下拉刷新
			async dropDown(cancel){
				const request = new Promise(resolve => {
					this.$refs.posts[this.swiperIndex].loadData({
						clear: true
					}, resolve)
				})
				await request
				uni.$emit('countComment')
				cancel()
			},
			handleFollowUserLoad(v){
				this.users = v
			},
			handleFollowUserClick(i){
				this.swiperIndex = i
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
			calcSwiperHeight(){
				const {screenHeight,statusBarHeight} = uni.getSystemInfoSync()
				this.swiperHeight = screenHeight - statusBarHeight - uni.upx2px(350) - 50 + "px"
			},
			handleSwiperChange(e){
				this.swiperIndex = e.detail.current
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
			handleRefreshFollowUsers(){
				uni.$on('refreshFollowUsers',()=>{
					this.$refs.followUsers.loadData({
						clear: true
					})
				})
			},
			destroyRefreshFollowUsers(){
				uni.$off('refreshFollowUsers')
			},
			destroyCountComment(){
				uni.$off('countComment')
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

<style scoped>
	.followUserRow {
		height: 200rpx;
	}
	
	.avatar {
		width: 250rpx;
		height: 160rpx;
	}
	
	.username {
		top: 10rpx;
		right: 15rpx;
	}
	
[select='true'] {
	background-color: #e0e0e0;
}
[select='false'] {
	background-color: none;
}
</style>
