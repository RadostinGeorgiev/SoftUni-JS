const router = require('express').Router();
const Cube = require('../models/Cube');

router.get('/', (req, res) => {
    res.render('create', { title: 'Cubicle - Add Page' });
});

router.post('/', async (req, res) => {
    if(!req.body) return res.sendStatus(400);
    
    const cube = new Cube(req.body);
    await cube.save();

    res.redirect('/');
});


module.exports = router;