const mongo = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

const dbName = 'ogp';

const getDb = () => {
mongo.connect(url, (err, client) => {
  if(err) {
    console.error(err)
    return false;
  }
  console.log('Connected successfully to server');
  var db = client.db(dbName);
  return db;
})
}

module.exports = {
  getDb,
};
