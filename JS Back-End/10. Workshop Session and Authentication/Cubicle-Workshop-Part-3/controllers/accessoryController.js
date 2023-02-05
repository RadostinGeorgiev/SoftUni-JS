const router = require('express').Router();
const { isAuthenticated } = require('../middlewares/guards');

const Accessory = require('../models/Accessory');

router.get('/create',  isAuthenticated, (req, res) => {
    res.render('accessory');
});

router.post('/create',  isAuthenticated, async (req, res) => {
    if (!req.body) return res.sendStatus(400);

    const { name, description, imageUrl } = req.body;
    const accessory = new Accessory({ name, description, imageUrl });
    await accessory.save();

    res.redirect('/');
});

module.exports = router;