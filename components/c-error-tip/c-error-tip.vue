<template>
	<view class="flex flex-column align-center">
		<c-image class="cover" :src="require('@/static/common/empty.png')"  mode="aspectFill" />
		
		<text class="main-color p-2 careful-bg-color">{{msg}}</text>
	</view>
</template>

<script>
	export default {
		props: {
			msg: {
				type: String,
				default: ""
			}
		}
	}
</script>

<style scoped>
	.cover {
		width: 600rpx;
		height: 400rpx;
	}
</style>
