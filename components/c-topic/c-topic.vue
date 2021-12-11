<template>
	<view>
		<view class="p-4 m-2 flex rounded transition-all" @tap="$emit('collect', v)" :active="collectTopics.includes(v)">
			<c-image :src="v.url" mode="aspectFill" class="cover rounded" />
			
			<view class="flex flex-column justify-between ml-3">
				<text class="font-lg">{{v.title}}</text>
				<text class="font">{{v.desc}}</text>
				<uni-dateformat class="font-sm secondary-color" :date="v.create_date" format="yyyy-MM-dd" />
			</view>
		</view>
		
		<c-divider />
	</view>
</template>

<script>
	export default {
		props: {
			v: {
				type: Object,
				default: () => ({})
			},
			collectTopics: {
				type: Array,
				default: () => []
			}
		}
	}
</script>

<style scoped>
	.cover {
		width: 200rpx;
		height: 180rpx;
	}
	
	[active=true] {
		background-color: #f0f0f0;
	}
	
	[active=false] {
		background-color: none;
	}
</style>
