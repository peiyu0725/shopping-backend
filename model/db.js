const MongoClient = require('mongodb').MongoClient;
// mongodb 位置
const url = 'mongodb://localhost:27017';
// 資料庫名
const dbName = 'ordering';
// 連立一個 MongoClient
const db = new MongoClient(url, { useNewUrlParser: true });

// client 開始連線
db.connect()
  .then(() => {
    db = db.db(dbName);
    console.log('mongodb is connected')
  })
  .catch(error => {
    console.error(error);
  });

module.exports = db;
