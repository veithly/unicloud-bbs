export default {
	onPageScroll(e) {
		const bufferScrollTop = 20
		const pageScrollStatus = e.scrollTop > bufferScrollTop
		
		uni.$emit('showBackTop', pageScrollStatus)
	}
}