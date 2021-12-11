const regitser = async payload => {
	const {
		username,
		password,
		gender,
		avatar
	} = payload
	
	const res = await uniCloud.callFunction({
		name: 'index',
		data: {
			action: 'user/register',
			data: {
				username,
				password,
				gender,
				avatar
			}
		}
	})
	
	return res
}

const login = async payload => {
	const { username, password } = payload
	
	const res = await uniCloud.callFunction({
		name: 'index',
		data: {
			action: 'user/login',
			data: {
				username,
				password
			}
		}
	})
	
	return res
}

const checkLogin = async () => {
	
	const res = await uniCloud.callFunction({
		name: 'index',
		data: {
			action: 'user/checkLogin'
		}
	})
	
	return res
}

export default {
	regitser,
	login,
	checkLogin
}