const express = require('express');
const router = express.Router();
const Bookmarks = require('../models/bookmarks.js')

//-------------------------------------INDEX------------------------------------
router.get('/',(req,res)=>{
  Bookmarks.find({}, (err, foundBookmark)=>{
    res.json(foundBookmark);
  });
});

//--------------------------------------ADD-------------------------------------
router.post('/',(req,res)=>{
  Bookmarks.create(req.body, (err, createdBookmark)=>{
    res.json(createdBookmark);
  });
});
//curl -X POST -H "Content-Type: application/json" -d '{"title": "The Smithsonian", "url":"https://www.si.edu/"}' http://localhost:3000/bookmarks
//curl -X POST -H "Content-Type: application/json" -d '{"title": "The Met", "url":"https://www.metmuseum.org/"}' http://localhost:3000/bookmarks
//curl -X POST -H "Content-Type: application/json" -d '{"title": "Unibroue", "url":"https://www.unibroue.com/"}' http://localhost:3000/bookmarks
//curl -X POST -H "Content-Type: application/json" -d '{"title": "Mikkeller", "url":"http://mikkeller.dk/brewery/"}' http://localhost:3000/bookmarks


//-------------------------------------EDIT-------------------------------------
router.put('/:id',(req,res)=>{
  Bookmarks.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedBookmark)=>{
    res.json(updatedBookmark);
  });
});
//curl -X PUT -H "Content-Type: application/json" -d '{"name":"I updated this"}' http://localhost:3000/bookmarks/ID

//------------------------------------DELETE------------------------------------
router.delete('/:id', (req,res)=>{
  Bookmarks.findByIdAndRemove(req.params.id, (err, deletedBookmark)=>{
    res.json(deletedBookmark);
  });
});
//curl -X DELETE http://localhost:3000/bookmarks/ID




module.exports = router;
