const db = require('./db')
console.log(db)
function list () {
    db.collection('menu').find().toArray(function (err, items) {
        if (err) throw err;
        return items
    })
}

module.exports = {
    list
};
