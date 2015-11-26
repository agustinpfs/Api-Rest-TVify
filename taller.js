// create events

var fs = require('fs')
var EventEmitter = require('events')
var util = require('util')
var inherits = util.inherits

function readFileText (name, callback) {
	process.nextTick(function(){  
		var content = fs.readFileSync(name)
		callback(content.toString())							
	})					   
}

// create class
function TextReader (name){
	EventEmitter.call(this)
	this.name = name
}

inherits(TextReader, EventEmitter)

TextReader.prototype.read = function () {
  var self = this
  readFileText(this.name, function (content) {
    self.emit('end', content)
  })
}

// readFileText('./lorem.txt', function(content){
// 	console.log(content)	
// })


var reader = new TextReader('./lorem.txt')

reader.on('end', function(content){
	console.log(content)
})
reader.read()

console.log('hola mundo')


