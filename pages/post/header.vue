<template>
	<view class="page-header px-2 flex align-center justify-between shadow">
		<view v-if="canBack" class="iconfont icon-arrowLeft-fill back-icon" @tap="back"/>
		<view class="font-lg font-weight-bold" style="width: 500rpx;">{{title}}</view>
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

	.shadow {
		box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
	}
</style>
