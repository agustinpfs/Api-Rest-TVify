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
  var onSave = function(vote) {
  	return function (err) {
		if (err) {
			return res.sendStatus(500).json(err)
		}
		res.json(vote)
	  	}
	  } 


   let id = req.params.id
  
  Vote.findOne({ showId: id}, (err, doc) => {
  	if (doc) {
  		// if exist, update this doc
  		doc.count = doc.count + 1
  		doc.save(onSave(doc))
  	} else {
  		// if not, create new doc
  		let vote = new Vote()
  		vote.showId = id
  		vote.count = 1
  		vote.save(onSave(vote))
  	}
  })
 
})

export default router