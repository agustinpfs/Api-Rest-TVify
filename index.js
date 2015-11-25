var fs = require('fs')
var http = require('http')

fs.readFile('./public/index.html', function (err, data) {
	if (err) {
		return console.log('no se pudo abrir: ' + err.message)
	}
	console.log(data.toString().length)
})

console.log('hola mundo')

var server = http.createServer(function (request,response){

})

server.listen(3000, function(){
  console.log('Servidor iniciado. Escuchando el puerto 3000')
})