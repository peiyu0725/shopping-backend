var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
// mongodb 位置
const url = 'mongodb://localhost:27017';
// 資料庫名
const dbName = 'ordering';
// 連立一個 MongoClient
const client = new MongoClient(url, { useNewUrlParser: true });
// client 開始連線
client.connect()
  .then(() => {
    console.log('mongodb is connected')
  })
  .catch(error => {
    console.error(error);
  });
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/mongo', function (req, res, next) {
  res.json({
    isConnected: client.isConnected(),
  });
});

module.exports = router;
