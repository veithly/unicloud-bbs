// 关注
const create = async payload => {
	const {
		follow_user_id
	} = payload

	const db = uniCloud.database();
	const follows = db.collection('follows');

	const res = await follows.add({
		follow_user_id
	})
	uni.$emit('refreshFollowUsers')
	return res
}

// 取消关注
const destory = async payload => {
	const {
		id
	} = payload
	const db = uniCloud.database();
	const follows = db.collection('follows');
	const res = await follows.doc(id).remove()
	uni.$emit('refreshFollowUsers')
	return res
}

const countFollow = async payload => {
	const {author} = payload
	const db = uniCloud.database()
	const posts = db.collection('follows')
	const {result} = await posts.where(`user_id == '${author}'`).count()
	return result.total
}

const countFans = async payload => {
	const {author} = payload
	const db = uniCloud.database()
	const posts = db.collection('follows')
	const {result} = await posts.where(`follow_user_id == '${author}'`).count()
	return result.total
}

export default {
	create,
	destory,
	countFollow,
	countFans
}