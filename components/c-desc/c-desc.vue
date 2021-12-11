<template>
	<view class="px-2 flex align-center justify-between">
		<text class="font-md">{{title}}</text>
		<text class="secondary-color" @tap="$emit('action')">{{actionTitle}}</text>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: "title"
			},
			actionTitle: String
		}
	}
</script>

<style>
</style>
