const router = require('express').Router();
const Cube = require('../models/Cube');

router.get('/', async (req, res) => {
    let query = Cube.find();

    if (req.query.search) {
        query.where('name').regex(new RegExp(req.query.search, 'i'));
    }
    if (req.query.from) {
        query.where('difficultyLevel').gte(req.query.from);
    }
    if (req.query.to) {
        query.where('difficultyLevel').lte(req.query.to);
    }

    const cubes = await query.lean().exec();

    res.render('home', { cubes });
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;
