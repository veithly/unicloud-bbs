<template>
	<view class="main">
		<swiper indicator-dots autoplay circular>
			<swiper-item v-for="v of values" :key="v._id">
				<view class="m-4 position-relative">
					<c-image :src="v.url" class="cover rounded" />
					<text class="position-absolute text-white title">{{v.title}}</text>
				</view>
			</swiper-item>
			
		</swiper>
	</view>
</template>

<script>
	export default {
		props: {
			values: {
				type: Array,
				default: () => []
			}
		}
	}
</script>

<style scoped>
	.main {
		height: 330rpx;
	}
	
	.cover {
		width: 670rpx;
		height: 250rpx;
	}
	
	.title {
		top: 0;
		right: 20rpx;
	}
</style>
