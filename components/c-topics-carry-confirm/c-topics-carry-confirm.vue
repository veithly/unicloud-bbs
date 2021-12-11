<template>
	<view v-if="!frozenShow" class="position-fixed main main-bg-color text-white px-4 rounded shadow flex align-center justify-between vivify" :class="animation" @tap="$emit('confirm')">
		<text class="iconfont icon-queren icon" />
		<text>确认{{num}}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				frozenShow: true // 冻结
			}
		},
		props: {
			num: {
				type: Number,
				default: 0
			},
			show: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			animation() {
				return this.show ? 'popIn' : 'popOut'
			}
		},
		watch: {
			show(v) {
				if (v) {
					if (this.frozenShow) {
						this.frozenShow = false
					}
				}
			}
		}
	}
</script>

<style scoped>
	.main {
		width: 150rpx;
		height: 90rpx;
		left: 50rpx;
		bottom: 50rpx;
	}
	
	.icon {
		font-size: 45rpx;
	}
</style>
