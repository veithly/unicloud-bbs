<template>
	<view>
		<c-sticky>
			<c-status-bar />
			<c-page-header title="编辑" />
		</c-sticky>

		<mp-html container-style="padding: 20rpx;" placeholder="请输入内容" editable @load="onMpHtmlLoad" ref="editor" />


		<!-- 占位 -->
		<view style="height: 240rpx;" />
		
		<c-editor-topics :topics="topics" />
		
		<c-editor-tool-bar class="iconfont">
			<view class="icon-chehui" @tap="useToolBar('undo')" />
			<view class="icon-chehui-copy" @tap="useToolBar('redo')" />
			<view class="icon-wenzi" @tap="useToolBar('insertText')" />
			<view class="icon-tupian1" @tap="useToolBar('insertImg')" />
			<view class="icon-qingchu1" @tap="useToolBar('clear')" />
			<view class="icon-huati1" @tap="useToolBar('carryTopics')" />
			<view class="icon-release" @tap="useToolBar('confirmRelase')" />
		</c-editor-tool-bar>

		<c-editor-release-popup @release="release" ref="popup" />
	
	</view>
</template>

<script>
	let editor;
	export default {
		destroyed() {
			uni.$off('carryTopics')
		},
		data() {
			return {
				topics: []
			}
		},
		methods: {
			onMpHtmlLoad() {
				editor = this.$refs.editor

				editor.getSrc = (type, value) => {
					return new Promise((resolve, reject) => {
						const isImg = type === 'img'
						
						if (isImg) {
							this.chooseAndUploadImage(resolve, reject)
						}
					})
				}
			},
			useToolBar(type) {
				const editorHandler = editor[type]
				if (editorHandler) {
					return editorHandler()
				}

				const vmHandler = this[type]
				if (vmHandler) {
					return vmHandler.call(this)
				}

				console.error("该方法editor实例与vue实例都不存在")
			},
			carryTopics() {
				uni.$once('carryTopics', collectTopics => {
					this.topics = collectTopics
				})
				uni.navigateTo({
					url: '/pages/topics/topics'
				})
			},
			confirmRelase() {
				this.$refs.popup.open()
			},
			async release(title) {
				const content = editor.getContent()
				const imgs = this.getImages(content)
				
				try{
					this.$U.loading()
					
					await this.$A.post.create({
						imgs,
						title,
						content,
						topic_ids: this.topics.map(topic => topic._id)
					})
					
					this.$U.notice("发布成功")
					this.$refs.popup.close()
					uni.navigateBack()
				}catch(e){
					console.log(e.message)
				} finally {
					this.$U.hideLoading()
				}
			},
			getImages(str) {
				const imgs = []
				const imgReg = /<img.*?(?:>|\/>)/gi;
				const srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
				const arr = str.match(imgReg) || []
				for (let i = 0; i < arr.length; i++) {
				  const src = arr[i].match(srcReg);
				  const id = src[1].replace(/.+\//, "");
				  if (src[1]) {
				    imgs.push({ id, url: src[1]})
				  }
				}
				return imgs
			},
			chooseAndUploadImage(resolve, reject) {
				uniCloud.chooseAndUploadFile({
					type: 'image',
					count: 1,
					onChooseFile: () => {
						this.$U.loading()
					},
					success: res => {
						const src = res.tempFiles[0].url
						resolve(src)
						this.$U.notice("上传成功")
					},
					fail: err => {
						console.error("上传失败", err.message)
						reject()
					},
					complete: () => {
						this.$U.hideLoading()
					}
				})
			}
		}
	}
</script>

<style>

</style>
