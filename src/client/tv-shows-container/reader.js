// publisher

var fs = require('fs')
var EventEmitter = require('events')
var util = require('util')
var inherits = util.inherits

function readFileText (name, callback) {
  process.nextTick(function () {
    var content = fs.readFileSync(name)
    callback(content.toString())
  })
}

// class statement/ constructor-builder
function TextReader (name) { // builder take a parameter(name)
  EventEmitter.call(this)
  this.name = name
}
// inheritance de EventEmitter class(node native)
inherits(TextReader, EventEmitter)

// apply method. read file asynchronous and emits an 
// event which will then be captured by the suscribers to this class
TextReader.prototype.read = function () {
  var self = this
  readFileText(this.name, function (content) {
    self.emit('end', content)
  })
}

var reader = new TextReader('./lorem.txt')

module.exports = reader