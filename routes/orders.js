var express = require('express');
var router = express.Router();

var db = require('../bin/mongo').getDb();

router.get('/', (request, response) => {
  const collection = db.getCollection('orders');

  collection.find().toArray((err, items) => {
    if(err) {
      console.log(err)
      return false;
    }

    response.send(items);
  })
})

module.exports = router;
