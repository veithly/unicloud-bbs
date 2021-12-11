<template>
	<view>
		<image v-if="loading" class="c-loading vivify popIn" src="@/static/action/loading.gif" mode="aspectFill"></image>
		<view v-else class="vivify popIn">
			<slot :useLoading="useLoading" :count="count"/>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loading: false,
				count: 0
			}
		},
		mounted() {
			const useCount = n => this.count = n || this.count
			this.emitFn(useCount,this.vid)
		},
		props: {
			emitFn: {
				type: Function,
				default: () => {}
			},
			vid: {
				type: String,
				default:""
			}
		},
		methods: {
			useLoading() {
				this.loading = true
				return () => this.loading = false
			}
		}
	}
</script>

<style scoped>
	.c-loading {
		width: 45rpx;
		height: 45rpx;
	}
</style>
