var express = require('express');
var router = express.Router();
var Utils = require('../Utils/utils');
var upload = Utils.upload;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.post('submit', upload.single('file'), function (req, res, next) {
  if(!req.file) return res.redirect('/');

  res.locals.files = Utils.getFilesUpload();

  res.render('index');

});
module.exports = router;
