var fs = require('fs')
var http = require('http')

fs.readFile('./public/index.html', function (err, data) {
	if (err) {
		return console.log('no se pudo abrir: ' + err.message)
	}
	console.log(data.toString().length)
})

console.log('hola mundo')

var server = http.createServer(function (request,response){ //each time it runs a request
	console.log('recibí un request ' + request.url)
	 switch (request.url) {
	    case '/':
	     fs.readFile('./public/index.html', function (err, data) {
			if (err) {
				return console.log('no se pudo abrir: ' + err.message)
			}
			response.end(data.toString())
	      })
	      break
	    case '/app.js':
	      fs.readFile('./public/app.js', function (err, data) {
			if (err) {
				return console.log('no se pudo abrir: ' + err.message)
			}
			response.end(data.toString())
	      })
	      break
	    case '/app.css':
	      fs.readFile('./public/app.css', function (err, data) {
			if (err) {
				return console.log('no se pudo abrir: ' + err.message)
			}
			response.end(data.toString())
	      })
	      break
      default:
      	response.end('')
      	break
	  }
	
})

server.listen(3000, function(){
  console.log('Servidor iniciado. Escuchando el puerto 3000')
})