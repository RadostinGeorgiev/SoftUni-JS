const router = require('express').Router();
const Cube = require('../models/Cube');

router.get('/', async (req, res) => {
    let cubes = await Cube.find({}).lean();
    console.log(cubes);

    if (req.query.search) {
        cubes = cubes.filter(c => c.name.toLowerCase()
            .includes(req.query.search.toLowerCase()));
    }
    console.log(cubes);
    if (req.query.from) {
        cubes = cubes.filter(c => c.difficultyLevel >= req.query.from);
    }
    console.log(cubes);
    if (req.query.to) {
        cubes = cubes.filter(c => c.difficultyLevel <= req.query.to);
    }
    console.log(cubes);
    res.render('home', {
        title: 'Cubicle - Home Page',
        cubes: cubes
    });
});

module.exports = router;