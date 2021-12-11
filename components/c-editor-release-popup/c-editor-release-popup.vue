<template>
	<uni-popup ref="popup">
		<view class="bg-white p-5 rounded main">
			<view class="position-relative my-2 py-3">
				<uni-easyinput placeholder="标题" :input-border="false" class="input-bg-color" v-model="title" :maxlength="20"/>
				<text class="font secondary-color position-absolute right-0">20/{{title.length}}</text>
			</view>
			<c-button :disabled="disabled" class="main-bg-color text-white" @on-tap="$emit('release', title)">发布</c-button>
		</view>
	</uni-popup>
</template>

<script>
	export default {
		data() {
			return {
				title: ""
			}
		},
		computed: {
			disabled() {
				const abled = this.title.length > 0
				return !abled
			}
		},
		methods: {
			open() {
				this.$refs.popup.open()
			},
			close() {
				this.$refs.popup.close()
			}
		}
	}
</script>

<style scoped>
	.main {
		width: 600rpx;
	}
</style>
