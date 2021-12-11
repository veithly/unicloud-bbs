import $Q from "@/common/js/ql.js"
const create = async payload => {
	const {
		imgs,
		title,
		content,
		topic_ids
	} = payload


	const db = uniCloud.database();
	const posts = db.collection('posts');

	const res = await posts.add({
		imgs,
		title,
		content,
		topic_ids
	})

	return res
}


const praise = async payload => {
	const { uid, postID, praiseStatus } = payload

	const res = await uniCloud.callFunction({
		name: 'index',
		data: {
			action: 'post/praise',
			data: {
				uid,
				postID,
				praiseStatus
			}
		}
	})

	return res
}

const love = async payload => {
	const { uid, postID, loveStatus } = payload

	const res = await uniCloud.callFunction({
		name: 'index',
		data: {
			action: 'post/love',
			data: {
				uid,
				postID,
				loveStatus
			}
		}
	})

	return res
}

const countPost = async payload => {
	const {author} = payload
	const db = uniCloud.database()
	const posts = db.collection('posts')
	const {result} = await posts.where(`author == '${author}'`).count()
	return result.total
}

const show = async payload => {
	const {_id,uid} = payload
	const afk = $Q.useFk('author')
	const postField = $Q([
		'create_date',
		afk('username'),
		afk('_id','authorID'),
		afk('avatar','avatarUrl'),
		'title',
		'imgs',
		`topic_ids.title|topics`,
		`size(praise_user_ids._id)|praiseNum`,
		`in('${uid}', praise_user_ids._id)|praiseStatus`,
		`size(love_user_ids._id)|loveNum`,
		`in('${uid}', love_user_ids._id)|loveStatus`
	])
	const db = uniCloud.database()
	const posts = db.collection('posts,uni-id-users,topics')
	const {result} = await posts.doc(_id).field(postField).get({
		getOne: true
	})
	return result.data
}

export default {
	create,
	praise,
	love,
	countPost,
	show
}
