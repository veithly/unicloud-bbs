<template>
	<view class="main" :style="{ top, backgroundColor }">
		<slot />
	</view>
</template>

<script>
	export default {
		props: {
			top: {
				type: [String, Number],
				default: 0
			},
			backgroundColor: {
				type: String,
				default: 'white'
			}
		}
	}
</script>

<style scoped>
	.main {
		position: sticky;
		z-index: 98;
	}
</style>
