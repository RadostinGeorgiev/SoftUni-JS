const router = require('express').Router();
const database = require('../config/database.json');

router.get('/', (req, res) => {
    res.render('home', {
        title: 'Cubicle',
        cubes: database.cubes
    });
});

module.exports = router;