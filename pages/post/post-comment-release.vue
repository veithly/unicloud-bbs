<template>
	<uni-easyinput class="rounded input-bg-color" placeholder="发布评论......" :inputBorder="false" confirmType="send" v-model="comment" @confirm="release"></uni-easyinput>
</template>

<script>
	export default {
		data() {
			return {
				comment: ''
			}
		},
		methods: {
			clear(){
				this.comment = ""
			},
			release(v){
				const hasComment = Boolean(v.length)
				if (hasComment){
					uni.showModal({
						content: "确认发布",
						confirmText:'发布',
						cancelText:'取消',
						success: async op => {
							const {confirm} = op
							if (confirm) {
								this.$U.loading()
								const success = () => this.$U.notice("发布成功")
								const fail = msg => this.$U.notice(msg)
								const complete = () => {
									this.$U.hideLoading()
									uni.hideKeyboard()
									this.clear()
								}
								this.$emit('release', {
									payload: {
										comment_content: v
									},
									success,
									fail,
									complete
								})
							}
						}
					})
				}
			},
		}
	}
</script>

<style>

</style>
