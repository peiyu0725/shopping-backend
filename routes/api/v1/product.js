var express = require('express');
var product = require('../../../controller/product')
var router = express.Router();

router.get('/', product.list)
// router.get('/:id', product.getItem)

module.exports = router;