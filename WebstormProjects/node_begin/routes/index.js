var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' ,'bro':['hello','big me', 'hey']});
});

module.exports = router;
