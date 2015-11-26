// create function asynchronous whithout readFile

var fs = require('fs')

function readFileText (name, callback) {
	process.nextTick(function(){  //agarra mi funcion y la pone en cola de eventos
		var content = fs.readFileSync(name)// hasta que el eventloop decida q termino y llame al callback
		callback(content.toString())							
	})					   
}

readFileText('./lorem.txt', function(content){
	console.log(content)	
})

console.log('hola mundo')
