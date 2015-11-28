import express from 'express'
const router = express.Router() 

import Vote from 'src/server/models'


//endpoints
// GET /api/votes
router.get('/votes', (req, res) => { // all request entering with GET method and /votes url, it will be captured this function and will run this callback
  console.log('GET /votes')
  Vote.find({}, (err, docs) => {
  	if (err) {
  		return res.sendStatus(500).json(err)
  	}
  	res.json(docs)
  })
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