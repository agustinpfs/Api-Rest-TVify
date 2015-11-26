import express from 'express'
const app = express() // const: la referencia no va a cambiar nunca

//object (DB)
const votes = {}


app.use(express.static('public'))  // middleware. each time enter a request, it will run this middelware


//endpoints
// GET /votes
app.get('/votes', (req, res) => { // all request entering with GET method and /votes url, it will be captured this function and will run this callback
  res.json(votes)
})

// POST /vote/<id>
app.post('/vote/:id', (req, res) =>{ // all request entering with this function
  let id = req.params.id
  if (votes[id] === undefined){
    votes[id] = 1
  } else {
    votes[id] = votes[id] + 1 //add 1 vote
  }
  res.json({votes: votes[id]})
})

app.listen(3000, () => console.log('Servidor iniciado. Escuchando en el puerto 3000'))


// RUN: babel-node src/server --presets es2015