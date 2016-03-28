var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/deinosti', function(req, res, next) {
  res.render('services', { title: 'Express' });
});

router.get('/profesii', function(req, res, next) {
  res.render('professions', { title: 'Express' });
});

router.get('/kursove', function(req, res, next) {
  res.render('courses', { title: 'Express' });
});

router.get('/galeria', function(req, res, next) {
  res.render('gallery', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

module.exports = router;
