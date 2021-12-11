<template>
	<view class="">
		<c-status-bar></c-status-bar>
		<c-page-header title="设置"></c-page-header>
		<c-button @on-tap="logout" class="m-4 main-bg-color text-white">退出登录</c-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			logout(){
				uni.removeStorageSync('uni_id_token')
				uni.removeStorageSync('uni_id_token_expired')
				this.toLogin()
			},
			toLogin(){
				uni.reLaunch({
					url: '/pages/login/login'
				})
			}
		}
	}
</script>

<style>

</style>
