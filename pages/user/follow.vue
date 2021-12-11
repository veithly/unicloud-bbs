<template>
	<c-button class="px-3 bg-white" @on-tap="resolveFollow" :class="f_id?'main-bg-color text-white font-sm':'bg-white'">
		{{ loading ? 'loading' : f_id ? '已关注' : '关注' }}
	</c-button>
</template>

<script>
	export default {
		props:{
			f_id: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				loading: false
			}
		},
		methods: {
			async resolveFollow(data){
				if (!this.loading){
					this.loading = true
					const fail = msg => this.$U.notice(msg)
					const success = () => {
						if (this.f_id){
							this.$U.notice("取关成功")
						} else {
							this.$U.notice("关注成功")
						}
					}
					const complete = () => {
						this.$U.hideLoading()
						this.loading = false
					}
					this.$emit('follow',{
						id: this.f_id,
						fail,
						success,
						complete
					})
 				}
			}
		}
	}
</script>

<style>

</style>
