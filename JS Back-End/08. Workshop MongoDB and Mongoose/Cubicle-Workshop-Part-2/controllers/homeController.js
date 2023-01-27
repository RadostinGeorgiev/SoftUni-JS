const router = require('express').Router();
const Cube = require('../models/Cube');

router.get('/', async (req, res) => {
    let cubes = await Cube.find({}).lean();

    //TODO: Use query to search in DB
    if (req.query.search) {
        cubes = cubes.filter(c => c.name.toLowerCase()
            .includes(req.query.search.toLowerCase()));
    }

    if (req.query.from) {
        cubes = cubes.filter(c => c.difficultyLevel >= req.query.from);
    }

    if (req.query.to) {
        cubes = cubes.filter(c => c.difficultyLevel <= req.query.to);
    }

    res.render('home', {
        title: 'Cubicle - Home Page',
        cubes: cubes
    });
});

module.exports = router;