var express = require('express')
var app = express()

app.use(express.static('public'))  // middleware. each time enter a request, it will run this middelware


//endpoints
// GET
app.get('/votes', function(req, res){ // all request entering with GET method and /votes url, it will be captured this function and will run this callback
  res.json([])
})

// POST /vote/<id>
app.post('/vote/:id',function(req, res){ // all request entering with this function

})

app.listen(3000, function (){
  console.log('Servidor iniciado. Escuchando en el puerto 3000')
})
