<template>
	<view>
		<c-sticky>
			<c-status-bar></c-status-bar>
			<c-page-header title="喜欢"></c-page-header>
		</c-sticky>
		<unicloud-db v-slot="{data, loading, error, hasMore}" collection="posts" :where="`in('${uid}',love_user_ids)`" :field="field" ref="udb">
		    <view v-if="error">{{error.message}}</view>
		    <view v-else>
				<c-post-tip @toPostPage="toPostPage" v-for="v of data" :key="v._id" :v="v"></c-post-tip>
				<c-scroll-load-more :loading="loading" :hasMore="hasMore"></c-scroll-load-more>
		    </view>
		</unicloud-db>
		<c-back-top></c-back-top>
	</view>
</template>

<script>
	import BackTopMixin from '@/components/c-back-top/c-back-top-mixin.js'
	export default {
		mixins: [BackTopMixin],
		data() {
			const { uid } = uniCloud.getCurrentUserInfo()
			const {aE} = this.$Q
			const cover = aE('imgs.url')
			const field = this.$Q([
				'title',
				`${cover}|cover`
			])
			return {
				uid,
				field
			}
		},
		onReachBottom() {
			this.$refs.udb.loadMore()
		},
		onPullDownRefresh() {
			this.$refs.udb.loadData({
				clear: true
			},uni.stopPullDownRefresh)
		},
		methods: {
			async toPostPage(v){
				try{
					uni.showLoading({
						title:'加载中'
					})
					const post = await this.$A.post.show({
						_id: v._id,
						uid: this.uid
					})
					uni.setStorageSync('post',post)
					uni.navigateTo({
						url: '/pages/post/post'
					})
				}catch(e){
					console.log(e.message)
				}finally{
					uni.hideLoading()
				}
			}
		}
	}
</script>

<style>

</style>
