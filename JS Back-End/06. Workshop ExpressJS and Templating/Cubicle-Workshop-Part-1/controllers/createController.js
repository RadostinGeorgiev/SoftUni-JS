const router = require('express').Router();
const data = require('../services/data');


router.get('/', (req, res) => {
    res.render('create');
});

router.post('/', (req, res) => {
    data.save(req.body);

    res.redirect('/');
});


module.exports = router;