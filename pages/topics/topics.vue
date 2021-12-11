<template>
	<view>
		<c-sticky class="pb-2">
			<c-status-bar />
			<c-page-header title="话题" />
			
			<c-search-bar placeholder="搜索话题" @confirm="onSearchBarConfirm"/>
			
		</c-sticky>	
		
		<c-alert class="mx-2 my-4">
			<view class="iconfont icon-jinggao font-md mr-1"/>
			请勿添加无关话题，违规者轻则删帖，重则封号
		</c-alert>
	
	
		<c-desc title="热门话题" action-title="发布话题" @action="openReleasePopup" />
		
		<c-topics-release-popup ref="popup" @release="onTopicRelease"/>
	
		
		<unicloud-db v-slot="{data, loading, error, hasMore}" collection="topics" :page-size="5" field="title,desc,create_date,cover.url as url" ref="udb" orderby="create_date desc" :where="searchRule">
			<c-error-tip v-if="error" :msg="error.message"/>
			<view v-else>
				<c-topic v-for="v of data" :v="v" :key="v._id" @collect="resolveCollectTopics" :collectTopics="collectTopics" />
				
				<c-scroll-load-more :loading="loading" :hasMore="hasMore" />
			</view>
		</unicloud-db>
		
		
		<c-topics-carry-confirm :show="carryConfirmShow" :num="carryConfirmNum" @confirm="onCarryConfirm"/>
		
		<c-back-top />
	</view>
</template>

<script>
	import BackTopMixin from "@/components/c-back-top/c-back-top-mixin.js"
	export default {
		mixins: [BackTopMixin],
		data() {
			return {
				searchText: '',
				collectTopics: []
			}
		},
		onReachBottom() {
			this.$refs.udb.loadMore()
		},
		onPullDownRefresh() {
			this.$refs.udb.loadData({
				clear: true
			}, uni.stopPullDownRefresh)
		},
		computed: {
			searchRule() {
				return `${new RegExp(this.searchText, 'gi')}.test(title)`
			},
			carryConfirmShow() {
				return this.carryConfirmNum > 0
			},
			carryConfirmNum() {
				return this.collectTopics.length 
			}
		},
		methods: {
			onCarryConfirm() {
				uni.showModal({
					title: '话题',
					content: '确认携带这些话题吗？',
					success: op => {
						const { confirm } = op
						if (confirm) {
							uni.$emit('carryTopics', this.collectTopics)
							uni.navigateBack()
						}
					}
				})
			},
			resolveCollectTopics(v) {
				const i = this.collectTopics.findIndex(topic => {
					return topic._id === v._id
				})
				
				// 已经有的话题清除掉
				const hasCollected = i !== -1 
				if (hasCollected) {
					return this.collectTopics.splice(i, 1)
				}
				
				// 超出话题数里 通知
				const bufferLength = 4
				if (this.collectTopics.length >= 4) {
					return this.$U.notice(`携带的话题数量不能超过${bufferLength}`)
				}
				
				// 没有的话题加进来
				this.collectTopics.push(v)
			},
			async onTopicRelease(payload, events) {
				try{
					events.start()
					await this.$A.topic.create(payload)
					events.success()
				}catch(e){
					events.fail(e.message)
				}finally {
					events.complete()
				}
			},
			onSearchBarConfirm(v) {
				this.searchText = v
			},
			openReleasePopup() {
				this.$refs.popup.open()
			}
		}
	}
</script>

<style scoped>
</style>
