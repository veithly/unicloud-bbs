<template>
	<view class="input-bg-color flex align-center position-fixed px-4 main" :style="{ bottom }" v-if="topics.length > 0">
		<text v-for="topic of topics" :key="topic._id" class="mx-2">#{{topic.title}}</text>
	</view>
</template>

<script>
	export default {
		props: {
			topics: {
				type: Array,
				default: () => []
			},
			bottom: {
				type: String,
				default: '100rpx'
			}
		}
	}
</script>

<style scoped>
	.main {
		width: 670rpx;
		height: 90rpx;
	}
</style>
