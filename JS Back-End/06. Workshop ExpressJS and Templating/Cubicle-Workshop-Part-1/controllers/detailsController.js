const router = require('express').Router();
const database = require('../config/database.json');

router.get('/:id', (req, res) => {
    const cube = database.cubes.find(c => c.id == req.params.id);
    
    res.render('details', { title: 'Cubicle - Details Page', cube });
});

module.exports = router;