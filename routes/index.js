var express = require('express');
var router = express.Router();

var landing = require('../controller/landing');

router.get('/', landing.get_landing);

module.exports = router;