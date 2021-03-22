var mongo = require('mongodb').MongoClient;
var multer = require('multer');
var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var fs = require('fs');
var path = require('path');

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now())
  }
});
var upload = multer({ storage: storage });
//var upload = multer({ dest: "uploads/" });
var imgModel = require('../model');

//const url = 'mongodb://localhost:27017';
//const url = 'mongodb+srv://yborai:BIGlebowski1@cluster0.85xv3.mongodb.net/ogp?retryWrites=true&w=majority';
const url = 'mongodb+srv://yborai:BIGlebowski1@cluster0.85xv3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(url, err => {
      console.log('connected');
      console.log(err);
    });

router.get('/', (req, res) => {
  imgModel.find({}, (err, items) => {
    if(err) {
      console.log(err);
      res.status(500).send('An error occurred', err);
    }
    else {
      res.json(items);
    }
  })
})

router.get('/new', (req, res) => {
  /*mongo.connect(url, (err, client) => {
    if(err) {
      console.error(err)
      return false;
    }
    const db = client.db(dbName);
    const collection = db.collection('catalog');*/

    imgModel.find({}, (err, items) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        }
        else {
            res.render('imagesPage', { items: items });
        }
    });

    /*collection.find().toArray((error, items) => {
      if(error) {
        console.log(error);
        return false;
      }
      console.log(items);
      res.send(items);
    })
  })*/
});

router.post('/new', upload.single('image'), (req, res) => {
  var data = {
    name: req.body.name,
    price: req.body.price,
    image: {
      data: fs.readFileSync(path.join(__dirname + '/../uploads/' + req.file.filename)),
      contentType: 'image/jpeg'
    }
  }

  imgModel.create(data, (err, items) => {
    if (err) {
      console.log(err);
    }
    else {
      res.redirect('/catalog/new');
    }
  })

  /*mongo.connect(url, (err, client) => {
    if(err) {
      console.error(err)
      return false;
    }
    console.log('Fuck you pay me');
    const db = client.db(dbName);
    const collection = db.collection('catalog');

    //Create a document that holds item info and picture location(uid)
    console.log(req.file);
    res.status(200);
    result = collection.insertOne(data);

    file_path = '../public/${result.insertedId}';

  })

  res.send(data);*/
})

module.exports = router;
