var fs = require('fs')
fs.readFile('./public/index.html', function (err, data) {
	console.log(data.toString().length)
})

console.log('hola mundo')