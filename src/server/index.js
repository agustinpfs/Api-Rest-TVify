import express from 'express'
const app = express() // const: la referencia no va a cambiar nunca

import api from 'src/server/api'


app.use(express.static('public'))  // middleware. each time enter a request, it will run this middelware

app.use('/api/votes', (req, res, next) => {
	console.log('middelware1')
	next()
})

app.use('/api/votes', (req, res, next) => {
	console.log('middelware2')
	next()
})
app.use('/api', api)

app.listen(3000, () => console.log('Servidor iniciado. Escuchando en el puerto 3000'))


// RUN: babel-node src/server --presets es2015