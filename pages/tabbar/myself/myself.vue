<template>
	<view>
		<c-status-bar />
		<c-page-header title="我的" :canBack="false"></c-page-header>
		<!-- 个人信息展示 -->
		<unicloud-db v-slot="{data={}, loading, error, options}" collection="uni-id-users" getone :where="`_id=='${uid}'`" field="username,avatar" ref="myself">
			<c-error-tip v-if="error" :msg="error.message"></c-error-tip>
			<view v-else class="p-3 mt-2 flex justify-between">
				<!-- {{data}} -->
				<c-image :src="data.avatar" class="avatar p-3 mt-2"></c-image>
				<view class="desc flex flex-column justify-between">
					<text class="h2">{{data.username}}</text>
					<view class="flex text-center justify-between mr-5">
						<view class="flex flex-column">
							<text class="h3">{{followNum}}</text>
							<text class="secondary-color">关注</text>
						</view>
						<view class="flex flex-column">
							<text class="h3">{{fansNum}}</text>
							<text class="secondary-color">粉丝</text>
						</view>
					</view>
				</view>
			</view>
		</unicloud-db>
		<!-- 其他页面入口 -->
		<view class="iconfont m-5 flex align-center" v-for="v of actions" :key="v.type" @tap="go(v.type)">
			<text :class="v.icon" class="mr-5 h3"></text>
			<text class="font-md">{{v.desc}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			const{uid} = uniCloud.getCurrentUserInfo()
			return {
				uid,
				followNum:0,
				fansNum:0,
				actions: [
					{
						type: 'history',
						desc: '历史记录',
						icon: 'icon-lishi'
					},	{
						type: 'collection',
						desc: '收藏',
						icon: 'icon-shoucang1'
					},	{
						type: 'like',
						desc: '喜欢',
						icon: 'icon-like1'
					},	{
						type: 'setting',
						desc: '设置',
						icon: 'icon-shezhi'
					},
				]
			}
		},
		onLoad() {
			this.count()
		},
		async onPullDownRefresh() {
			const request = new Promise(resolve=>{
				this.$refs.myself.loadData({
					clear: true
				},resolve)
			})
			await Promise.all([
				request,
				this.count()
			])
			uni.stopPullDownRefresh()
		},
		methods: {
			go(type){
				uni.navigateTo({
					url: `/pages/${type}/${type}`
				})
			},
			async count(){
				return Promise.all([
					this.countFans(),
					this.countFollow()
				])
			},
			async countFollow(){
				try{
					this.followNum = await this.$A.follow.countFollow({
						author: this.uid
					})
				}catch(e){
					console.log(e.message)
				}
			},
			async countFans(){
				try{
					this.fansNum = await this.$A.follow.countFans({
						author: this.uid
					})
				}catch(e){
					console.log(e.message)
				}
			}
		}
	}
</script>

<style>
	.avatar {
		width: 250rpx;
		height: 300rpx;
		border-radius: 10rpx 60rpx 60rpx 30rpx;
	}
	
	.desc {
		width: 350rpx;
	}
</style>
