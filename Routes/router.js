const express = require('express');
const router = express.Router();
const Item = require("../Database/schema").Item;

router.post('/api/vendor/items/', function(req,res){
  const item = new Item()
  item.cost = "thirty-five";
  item.save()
  .then( function(item){
    res.json(item)
  })
  .catch( function(error){
    res.status(418).json(error)
  })
})

module.exports = router



// router.get('/api/customers/items', function(req,res){
//
//
//   res.json()
// })
