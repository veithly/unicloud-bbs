// 发布对文章的评论
const createPost = async payload => {
	const { 
		post_id,
		comment_content
	} = payload
	const comment_type = 0
	const db = uniCloud.database()
	
	const comments = db.collection('comments')
	
	const res = comments.add({
		post_id,
		comment_content,
		comment_type
	})
	
	return res
} 

// 发布对评论的评论
const createComment = async payload => {
	const { 
		post_id,
		comment_content,
		reply_user_id,
		reply_comment_id,
	} = payload
	const comment_type = 1
	const db = uniCloud.database()
	
	const comments = db.collection('comments')
	
	const res = comments.add({
		post_id,
		comment_content,
		comment_type,
		reply_user_id,
		reply_comment_id
	})
	
	return res
} 

const praise = async payload => {
	const { uid, commentID, praiseStatus } = payload

	const res = await uniCloud.callFunction({
		name: 'index',
		data: {
			action: 'comment/praise',
			data: {
				uid,
				commentID,
				praiseStatus
			}
		}
	})

	return res
}

// 统计评论评论的数量
const countCommentComment = async payload => {
	const { _id } = payload
	const db = uniCloud.database()
	const comments = db.collection('comments')
	const {result} = await comments.where(`'${_id}'==reply_comment_id`).count()
	return result.total
}

// 统计文章所有评论的数量
const countTotalComment = async payload => {
	const { _id } = payload
	const db = uniCloud.database()
	const comments = db.collection('comments')
	const {result} = await comments.where(`'${_id}'==post_id`).count()
	return result.total
}

export default {
	praise,
	createPost,
	createComment,
	countCommentComment,
	countTotalComment
}