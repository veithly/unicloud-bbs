const uniID = require('uni-id')
	
const register = async (event, context) => {
	const uniIDIns = uniID.createInstance({ context }) 
	
	const { data } = event
	const res = await uniIDIns.register({
		username: data.username,
		password: data.password,
		gender: data.gender,
		avatar: data.avatar
	})
	return res
}

const login = async (event, context) => {
	const uniIDIns = uniID.createInstance({ context }) 
	
	const { data } = event
	const res = await uniIDIns.login({
		username: data.username,
		password: data.password
	})
	return res
}

const checkLogin = async (event, context) => {
	const uniIDIns = uniID.createInstance({ context }) 
	
	const res = await uniIDIns.checkToken(event.uniIdToken, {
		needUserInfo: false
	})
	
	return res
}


module.exports = {
	register,
	login,
	checkLogin
}