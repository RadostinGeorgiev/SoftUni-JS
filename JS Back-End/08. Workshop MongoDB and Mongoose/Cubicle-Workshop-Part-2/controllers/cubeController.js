const router = require('express').Router();
const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');

router.get('/create', (req, res) => {
    res.render('create/cube');
});

router.post('/create', async (req, res) => {
    if (!req.body) return res.sendStatus(400);

    const {name, description, imageUrl} = req.body;
    const cube = new Cube({name, description, imageUrl});
    const cubeId = await cube.save();

    res.redirect(`/${cubeId._id}/attach`);
});

router.get('/:cubeId', async (req, res) => {
    const cube = await Cube.findById(req.params.cubeId).populate('accessories').lean();

    res.render('details', { cube });
});

router.get('/:cubeId/attach', async (req, res) => {
    const cube = await Cube.findById(req.params.cubeId).lean();
    const accessory = await Accessory.find().where('_id').nin(cube.accessories).lean();

    res.render('create/attachment', { cube, accessory });
});

router.post('/:cubeId/attach', async (req, res) => {
    const cube = await Cube.findById(req.params.cubeId);
    
    const accessoryId = req.body.accessory;
    cube.accessories.push(accessoryId);

    await cube.save();

    res.redirect(`/`);
});

module.exports = router;