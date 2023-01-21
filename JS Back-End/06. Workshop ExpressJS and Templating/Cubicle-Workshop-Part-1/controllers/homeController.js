const router = require('express').Router();
const { getItems } = require('../services/data');

router.get('/', (req, res) => {
    const cubes = getItems();
    res.render('home', {
        title: 'Cubicle',
        cubes
    });
});

module.exports = router;