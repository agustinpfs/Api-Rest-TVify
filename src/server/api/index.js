import express from 'express'
const router = express.Router() 

var votes = {}


//endpoints
// GET /api/votes
router.get('/votes', (req, res) => { // all request entering with GET method and /votes url, it will be captured this function and will run this callback
  console.log('GET /votes')
  res.json(votes)
})

// POST /api/vote/<id>
router.post('/vote/:id', (req, res) =>{ // all request entering with this function
  let id = req.params.id
  if (votes[id] === undefined){
    votes[id] = 1
  } else {
    votes[id] = votes[id] + 1 //add 1 vote
  }
  res.json({votes: votes[id]})
})

export default router