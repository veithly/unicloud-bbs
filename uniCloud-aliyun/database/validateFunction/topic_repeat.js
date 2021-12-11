module.exports = async function(rule, value, data, callback) {
	const db = uniCloud.database();
	
	const topics = db.collection('topics')
	
	const topicsStock = await topics.where({
		title: value
	}).get()
	
	const hasTopics = topicsStock.affectedDocs >= 1
	
	if (hasTopics) {
		return '话题已存在'
	}
	
	return true
}
