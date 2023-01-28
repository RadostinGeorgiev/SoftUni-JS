const router = require('express').Router();
const Cube = require('../models/Cube');

router.get('/', async (req, res) => {
    Cube.createIndexes({name:"text"});

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

    console.log(cubes);
    res.render('home', {
        title: 'Cubicle - Home Page',
        cubes: cubes
    });
});

module.exports = router;
