const user = require('./user.js')
const post = require('./post.js')
const comment = require('./comment.js')

'use strict';
exports.main = async (event, context) => {

	const actions = {
		user,
		post,
		comment
	}

	const [
		controller,
		method
	] = event.action.split('/')

	return actions[controller][method](event, context)
};
