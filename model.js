var mongoose = require('mongoose');

var catalogItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: {
    data: Buffer,
    ContentType: String
  }
})

module.exports = new mongoose.model('CatalogItem', catalogItemSchema)
