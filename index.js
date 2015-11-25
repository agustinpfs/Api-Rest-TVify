var fs = require('fs')
var data = fs.readFileSync('./public/index.html')

console.log(data.toString())
console.log('hola mundo')