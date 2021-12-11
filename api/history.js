// update
const update = async payload => {
	// 浏览过——>更新时间 没有浏览->创建记录
	const { uid, pid } = payload
	const db = uniCloud.database();
	const history = db.collection('history');
	const sql = `user_id=='${uid}' && post_id=='${pid}'`
	const now = db.getCloudEnv('$cloudEnv_now')
	const { result } = await history.where(sql).update({
		create_date: now
	}) 
	const noRecord = result.updated === 0
	
	let res = result
	
	if (noRecord){
		res = await history.add({
			user_id: uid,
			post_id: pid
		})
	}
	return res
}

export default {
	update
}