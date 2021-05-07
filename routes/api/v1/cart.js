var express = require('express');
var cart = require('../../../controller/cart')
var router = express.Router();

router.get('/', cart.list)

module.exports = router;