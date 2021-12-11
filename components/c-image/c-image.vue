<template>
	<view :ske="loading" @click="$emit('on-tap')">
		<image class="customImage vivify" :class="loading ? 'opacity-0' : 'opacity-1 fadeIn'" :src="src" :mode="mode" :lazy-load="lazyLoad" @error="onLoadFail" @load="onLoadComplete" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loading: true
			}
		},
		props: {
			src: {
				type: String,
				default: ""
			},
			mode: {
				type: String,
				default: "aspectFill"
			},
			lazyLoad: {
				type: Boolean,
				default: false
			}
		},
		mounted() {
			// 容错
			setTimeout(() => {
				this.loading = false
			}, 3000)
		},
		methods: {
			onLoadFail() {
				console.log(`图片加载失败, src = ${this.src}`)
			},
			onLoadComplete() {
				this.loading = false
			}
		}
	}
</script>

<style scoped>
	.customImage {
		width: inherit;
		height: inherit;
		border-radius: inherit;
		will-change: transform;
	}
	
	.opacity-0 {
		opacity: 0;
	}
	
	.opacity-1 {
		opacity: 1;
	}
</style>
