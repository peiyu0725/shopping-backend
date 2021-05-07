var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
// mongodb 位置
const url = 'mongodb://localhost:27017';
// 資料庫名
const dbName = 'ordering';
// 連立一個 MongoClient
const client = new MongoClient(url, { useNewUrlParser: true });
var menuCollection = null
// client 開始連線
client.connect()
  .then(() => {
    menuCollection = client.db(dbName).collection('menu');
    console.log('mongodb is connected')
  })
  .catch(error => {
    console.error(error);
  });

router.get('/initmenus', function (req, res, next) {
  let list = []
  const count = 20
  const min = 1
  const max = 1000

  for (let i = 1; i <= count; i++) {
    const randomId = Math.floor(Math.random() * (max - min + 1)) + min
    list.push({
      id: i,
      imageId: randomId,
      name: `Image ${randomId}`
    })
  }

  // 寫入 MongoDb
  const worker = (async function (data) {
    const result = await menuCollection.insertMany(data);
    return result;
  })(list);

  worker.then(() => {
    res.json(list);
  }).catch(next);
});

module.exports = router;
