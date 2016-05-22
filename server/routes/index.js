var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

/* GET addTrip page. */
router.get('/trip', function (req, res, next) {
    res.render('addTrip', { title: 'Express' });
});

module.exports = router;
