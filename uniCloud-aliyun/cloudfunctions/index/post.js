const praise = async (event, context) => {
	const { data } = event
	
	const { uid, postID, praiseStatus } = data
	
	const db = uniCloud.database()
	const posts = db.collection('posts')
	
	const post = await posts.doc(postID)
	
	const $ = db.command
	
	let res = {}
	
	if (!praiseStatus) {
		res = await post.update({
			praise_user_ids: $.push(uid)
		})
	} else {
		res = await post.update({
			praise_user_ids: $.pull(uid)
		})
	}
	
	res.errCode = 0
	return res
}

const love = async (event, context) => {
	const { data } = event
	
	const { uid, postID, loveStatus } = data
	
	const db = uniCloud.database()
	const posts = db.collection('posts')
	
	const post = await posts.doc(postID)
	
	const $ = db.command
	
	let res = {}
	
	if (!loveStatus) {
		res = await post.update({
			love_user_ids: $.push(uid)
		})
	} else {
		res = await post.update({
			love_user_ids: $.pull(uid)
		})
	}
	
	res.errCode = 0
	return res
}

module.exports = {
	praise,
	love
}