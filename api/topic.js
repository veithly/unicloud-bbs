const create = async payload => {
	const { 
		cover,
		title,
		desc
	} = payload
	
	const db = uniCloud.database()
	
	const topics = db.collection('topics')
	
	const res = topics.add({
		cover,
		title,
		desc
	})
	
	return res
} 

export default {
	create
}