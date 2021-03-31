var express = require('express');

var product = require('../controller/product.controller');
// var validate = require('../validate/user.validate');
// var authMiddleware = require('../middlewares/auth.middleware')

var router = express.Router();

router.get('/', product.index);

module.exports = router;