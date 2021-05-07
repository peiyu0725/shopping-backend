const productModel = require('../model/product')

async function list (req, res, next) {
  const items = productModel.list()
    const data = items.map(item => {
      return {
        id: item.id,
        name: item.name,
        imageId: item.imageId,
      }
    })
    res.json(data);
}

// async function getItem (req, res, next) {
//   const id = req.params.id
//   menuCollection.find({ id: Number(id) }).limit(1).toArray(function (err, items) {
//     if (err) throw err;
//     if (items.length === 0) res.json({})
//     res.json({
//       id: items[0].id,
//       name: items[0].name,
//       imageId: items[0].imageId,
//     });
//   })
// }

module.exports = {
  list,
  // getItem
};
