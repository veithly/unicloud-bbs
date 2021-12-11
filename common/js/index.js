const loading = () => {
	uni.showLoading({
		title: 'loading...'
	})
}

const hideLoading = () => {
	uni.hideLoading()
}


const notice = title => {
	uni.showToast({
		title,
		icon: 'none'
	})
}

const refreshUser = info => {
	if (info.token) {
		uni.setStorageSync('uni_id_token', info.token)
	}
	
	if (info.token_expired) {
		uni.setStorageSync('uni_id_token_expired', info.token_expired)
	}
}

const delayRequest = async (request, delay = 500) => {
	const delayP = new Promise(resolove => {
		setTimeout(resolove, 500)
	})
	const [res] = await Promise.all([request, delayP])
	return res
}

export default {
	loading,
	hideLoading,
	notice,
	refreshUser,
	delayRequest
}
