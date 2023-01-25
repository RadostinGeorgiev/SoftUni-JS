const router = require('express').Router();
const data = require('../services/cubeService');


router.get('/', (req, res) => {
    res.render('create', { title: 'Cubicle - Add Page' });
});

router.post('/', (req, res) => {
    data.save(req.body);

    res.redirect('/');
});


module.exports = router;