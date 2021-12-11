<template>
	<uni-popup ref="popup">
		<view class="bg-white rounded p-5 main">
			
			<!-- 封面 -->
			<view class="cover flex align-center justify-center">
				<uni-file-picker v-model="cover" return-type="object" limit="1" mode="grid" file-mediatype="image" :image-styles="coverStyles" @success="onCoverUploadSuccess" @fail="onCoverUploadFail" @delete="onCoverUploadDelete">
			
					<view class="cover-seat input-bg-color flex align-center justify-center secondary-color">封面</view>
				</uni-file-picker>
			</view>
			
			<!-- 标题 -->
			<view class="my-2 position-relative">
				<uni-easyinput class="input-bg-color rounded" :input-border="false" v-model="title" placeholder="标题" maxlength="5"/>
				<text class="position-absolute title-tip secondary-color font-sm">5/{{title.length}}</text>
			</view>
			
			<!-- 描述 -->
			<view class="my-2 position-relative">
				<uni-easyinput class="pl-2 py-2 input-bg-color rounded desc" :input-border="false" v-model="desc" placeholder="描述" maxlength="20" type="textarea"/>
				<text class="position-absolute desc-tip secondary-color font-sm">20/{{desc.length}}</text>
			</view>
			
			<!-- 发布 -->
			<c-button class="main-bg-color my-2 text-white" :disabled="disabled" @on-tap="release">发布</c-button>
		</view>
	</uni-popup>
</template>

<script>
	import { lockMixin } from "@/common/js/mixin.js"
	export default {
		mixins: [lockMixin],
		data() {
			return {
				cover: [],
				title: "",
				desc: "",
				coverUploadStatus: false,
				coverStyles: {
					height: 120,
					width: 120,
					border: {
						width: "1px",
						style: "solid",
						radius: "8px"
					}
				}
			}
		},
		computed: {
			disabled() {
				const hasTitle = this.title.length > 0
				const abled = hasTitle && this.coverUploadStatus
				return !abled
			}
		},
		methods: {
			open() {
				this.$refs.popup.open()
			},
			release() {
				this.useOnce(unlock => {
					const events = {
						start: () => this.$U.loading(),
						success: () => {
							this.$U.notice("发布话题成功")
							this.clear()
							this.closePopup()
						},
						fail: msg => this.$U.notice(msg),
						complete: () => {
							this.$U.hideLoading()
							unlock()
						}
					}
							
							
					this.$emit('release', {
						cover: this.cover,
						title: this.title,
						desc: this.desc
					}, events)
				})
			},
			setCoverUploadStatus(status) {
				this.coverUploadStatus = status
			},
			onCoverUploadSuccess() {
				this.setCoverUploadStatus(true)
				this.$U.notice("封面上传成功")
			},
			onCoverUploadFail() {
				this.setCoverUploadStatus(false)
				this.$U.notice("封面上传失败")
			},
			onCoverUploadDelete() {
				this.setCoverUploadStatus(false)
				this.$U.notice("封面删除成功")
			},
			clear() {
				this.cover = []
				this.title = ''
				this.desc = ''
			},
			closePopup() {
				this.$refs.popup.close()
			}
		}
	}
</script>

<style scoped>
	.main {
		width: 550rpx;
	}
	
	.cover {
		width: 100%;
		height: 100%;
	}
	
	.cover-seat {
		width: 100%;
		height: 100%;
	}
	
	.title-tip {
		top: 15rpx;
		right: 60rpx;
	}
	
	.desc {
		width: 530rpx;
	}
	
	.desc-tip {
		top: 10rpx;
		right: 60rpx;
	}
</style>
