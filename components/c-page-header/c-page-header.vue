<template>
	<view class="page-header px-2 flex align-center justify-between">
		<view v-if="canBack" class="iconfont icon-arrowLeft-fill back-icon" @tap="back"/>
		<view class="font-lg">{{title}}</view>
		<slot />
	</view>	
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: ""
			},
			canBack: {
				type: Boolean,
				default: true
			}
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style scoped>
	.page-header {
		height: 100rpx;
	}
	
	.back-icon {
		font-size: 50rpx;
	}
</style>
