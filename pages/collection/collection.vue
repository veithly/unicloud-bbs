<template>
	<view>
		<c-sticky>
			<c-status-bar></c-status-bar>
			<c-page-header title="收藏"></c-page-header>
		</c-sticky>
		<unicloud-db v-slot="{data, loading, error, hasMore}" collection="stock,posts" :where="`user_id=='${uid}'`" :field="field" ref="udb" orderby="create_date desc">
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
			const { aE, useFk } = this.$Q
			const pfk = useFk('post_id')
			const cover = aE(aE('post_id.imgs.url'))
			const field = this.$Q([
				'create_date',
				pfk('title'),
				pfk('_id','pid'),
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
						_id: v.pid,
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
