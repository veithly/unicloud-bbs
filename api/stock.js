// 收藏
const create = async payload => {
	const {
		post_id
	} = payload


	const db = uniCloud.database();
	const stock = db.collection('stock');

	const res = await stock.add({
		post_id
	})

	return res
}

// 取消收藏
const destory = async payload => {
	const {
		id
	} = payload


	const db = uniCloud.database();
	const stock = db.collection('stock');
	const res = await stock.doc(id).remove()

	return res
}

export default {
	create,
	destory
}