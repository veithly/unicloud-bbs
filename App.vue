<script>
	export default {
		onLaunch() {
			console.log('App Launch')
		},
		onShow() {
			console.log('App Show')
		},
		onHide() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	
	@import url("@/common/css/free.css");
	
	/* #ifndef APP-NVUE */
	@import url("@/common/font/iconfont.css");
	
	@import url("@/common/css/vivify.css");
	
	@import url("@/common/css/common.css");
	/* #endif */
</style>
