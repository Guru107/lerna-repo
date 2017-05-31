var path = require('path')

module.exports = {
	context:path.join(__dirname),
	entry:['./index.js'],
	output:{
		path:path.join(__dirname,'public'),
		filename: '[name].js'
	}
}