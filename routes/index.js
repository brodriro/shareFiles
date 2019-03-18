var express = require('express');
var router = express.Router();
var upload = require('../Utils/utils').upload;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('submit', upload.single('file'), function (req, res, next) {
  res.redirect('/');
});
module.exports = router;
