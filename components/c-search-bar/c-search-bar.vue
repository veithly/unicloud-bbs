<template>
	<view class="position-relative">
		<input :class="shadow" class="mx-2 p-1 px-2 input transition-all rounded" :placeholder="placeholder" @focus="focus" @blur="blur" v-model="value" @confirm="confirm" :focus="focusStatus">
		<text class="text-light-black iconfont position-absolute icon" :class="icon" @tap="clear"/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: "",
				focusStatus: false,
			}
		},
		props: {
			placeholder: {
				type: String,
				default: "搜索"
			}
		},
		computed: {
			shadow() {
				return this.focusStatus ? 'focus-box-shadow' : 'box-shadow'
			},
			icon() {
				const hasInput = this.value.length > 0
				return hasInput ? 'icon-qingchu' : 'icon-sousuo'
			}
		},
		methods: {
			focus() {
				this.focusStatus = true
			},
			blur() {
				this.focusStatus = false
			},
			clear() {
				this.value = ""
			},
			confirm() {
				this.blur()
				this.$emit('confirm', this.value)
			}
		}
	}
</script>

<style scoped>
	.input {
		height: 90rpx;
	}
	
	.icon {
		top: 30rpx;
		right: 50rpx;
		font-size: 45rpx;
	}
	
	
	/* https://getcssscan.com/css-box-shadow-examples?ref=producthunt */
	.focus-box-shadow {
		box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
	}
	
	.box-shadow {
		box-shadow: rgba(136, 165, 191, 0.35) 0px 1px 8px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
	}
</style>
