<template>
	<c-temp v-slot="op">
		<view @tap="resolveCollect(op)" class="flex flex-column align-center" :class="c_id ? 'main-color' : ''">
			<view class="iconfont icon-shoucang1 collect-icon"></view>
			<text>{{c_id ? '已收藏' : '收藏'}}</text>
		</view>
	</c-temp>
</template>

<script>
	export default {
		props:{
			c_id: {
				type: String,
				default: ''
			}
		},
		methods:{
			async resolveCollect(op){
				const stopLoading = op.useLoading()
				const fail = msg => this.$U.notice(msg)
				const success = () => {
					if (this.c_id){
						this.$U.notice('取消收藏成功')
					} else {
						this.$U.notice('收藏成功')
					}
				}	
				const complete = () => stopLoading()
				
				this.$emit('collect', {
					id: this.c_id,
					fail,
					success,
					complete
				})
			}
		}
	}
</script>

<style scoped>
	.collect-icon {
		font-size: 55rpx;
	}
</style>
