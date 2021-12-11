<template>
	<view v-if="!fronzenShow" class="position-fixed input-bg-color rounded flex align-center justify-center shadow vivify main" :style="diyPosition"  :class="animation">
		<view class="iconfont icon-huidaodingbu icon" @tap="backTop" />
	</view>
</template>

<script>
	export default {
		created() {
			this.showBackTop = status => {
				this.fronzenShow = false
				this.show = status
			}
			uni.$on('showBackTop', this.showBackTop)
		},
		destroyed() {
			uni.$off('showBackTop', this.showBackTop)
		},
		data() {
			return {
				fronzenShow: true,
				show: false
			}
		},
		props: {
			right: {
				type: String,
				default: "50rpx"
			},
			bottom: {
				type: String,
				default: "50rpx"
			}
		},
		computed: {
			animation() {
				return this.show ? 'popIn' : 'popOut'
			},
			diyPosition() {
				return {
					right: this.right,
					bottom: this.bottom
				}
			}
		},
		methods: {
			backTop() {
				uni.pageScrollTo({
					scrollTop: 0
				})
			}
		}
	}
</script>

<style scoped>
	.main {
		width: 90rpx; 
		height: 90rpx;
	}
	
	.icon {
		font-size: 50rpx;
	}
</style>
