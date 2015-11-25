var fs = require('fs')
fs.readFile('./public/index.html', function (err, data) {
	if (err) {
		return console.log('no se pudo abrir: ' + err.message)
	}
	console.log(data.toString().length)
})

console.log('hola mundo')