var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'RideSurf' });
});

/* GET addTrip page. */
router.get('/trip', function (req, res, next) {
    res.render('addTrip', { title: 'Add a trip' });
});

/* GET addTrip page. */
router.get('/confirm', function (req, res, next) {
    res.render('confimation', { title: 'Confirmation' });
});

module.exports = router;
