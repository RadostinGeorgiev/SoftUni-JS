const router = require('express').Router();
const Accessory = require('../models/Accessory');

router.get('/create', (req, res) => {
    res.render('create/accessory');
});

router.post('/create', async (req, res) => {
    if (!req.body) return res.sendStatus(400);

    const {name, description, imageUrl } = req.body;
    const accessory = new Accessory(name, description, imageUrl);
    await accessory.save();

    res.redirect('/');
});

module.exports = router;