const router = require('express').Router();
const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');

router.get('/cube', (req, res) => {
    res.render('create/cube', { title: 'Cubicle - Add Page' });
});

router.get('/accessory', (req, res) => {
    res.render('create/accessory', { title: 'Cubicle - Add Accessory' });
});

router.post('/cube', async (req, res) => {
    if (!req.body) return res.sendStatus(400);
    console.log(req.body);

    const cube = new Cube(req.body);
    const cubeId = await cube.save();

    res.redirect(`/cube/${cubeId._id}/attach`);
});

router.post('/accessory', async (req, res) => {
    if (!req.body) return res.sendStatus(400);

    const accessory = new Accessory(req.body);
    await accessory.save();

    res.redirect('/');
});

module.exports = router;