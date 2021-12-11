const praise = async (event, context) => {
	const { data } = event
	
	const { uid, commentID, praiseStatus } = data
	
	const db = uniCloud.database()
	const comments = db.collection('comments')
	
	const comment = await comments.doc(commentID)
	
	const $ = db.command
	
	let res = {}
	
	if (!praiseStatus) {
		res = await comment.update({
			praise_user_ids: $.push(uid)
		})
	} else {
		res = await comment.update({
			praise_user_ids: $.pull(uid)
		})
	}
	
	res.errCode = 0
	return res
}

module.exports = {
	praise
}