const router = require('express').Router();
const Cube = require('../models/Cube');

router.get('/:id', async (req, res) => {
    const cube = await Cube.findById(req.params.id).lean();
    
    res.render('details', { title: 'Cubicle - Details Page', cube });
});

module.exports = router;