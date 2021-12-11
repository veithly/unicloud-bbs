<template>
	<view>
		<uni-load-more :status="loading ? 'loading' : hasMore ? 'more' : 'noMore'" icon-type="circle" />
		<view v-if="!hasMore" class="seat" />
	</view>
</template>

<script>
	export default {
		props: {
			loading: {
				type: Boolean,
				default: false 
			},
			hasMore: {
				type: Boolean,
				default: true
			}
		}
	}
</script>

<style scoped>
	.seat {
		height: 200rpx;
	}
</style>
