import fs from 'fs'
import EventEmitter from 'events' //events: native node module 


// declare the function outside the class In es6 do not exist private methods
function readFileText (name, callback) {
  process.nextTick(function () {
    var content = fs.readFileSync(name)
    callback(content.toString())
  })
}


// class statement es6
class TextReader extends EventEmitter {
	constructor (name){
		super()//call builder(constructor)
		this.name = name
	}

	read() {
		readFileText(this.name, content => {
		  this.emit('end', content)
		})
	}
}

var reader = new TextReader('./lorem.txt')
export default reader