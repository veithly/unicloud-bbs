<template>
	<view class="p-1 px-2" @click="$emit('toPostPage',v)">
		<view class="flex justify-between">
			<view class="flex flex-column align-start justify-between">
				<text class="h3">{{v.title}}</text>
				<text class="careful-bg-color main-color p-1 px-2 font-sm rounded">文章</text>
			</view>
			<c-image :src="v.cover" mode="aspectFill" class="cover rounded"/>
		</view>
		<c-divider />
	</view>
</template>

<script>
	export default {
		props:{
			v: {
				type:Object,
				default:() => ({})
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
	.cover {
		width: 200rpx;
		height: 150rpx;
	}
</style>
