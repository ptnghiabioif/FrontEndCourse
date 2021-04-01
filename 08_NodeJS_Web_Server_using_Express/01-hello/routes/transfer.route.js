var express = require('express');

var controller = require('../controller/transfer.controller');
const { route } = require('./user.route');

var router = express.Router();

router.get('/create', controller.create);
router.post('/create', controller.postCreate);

module.exports = router;