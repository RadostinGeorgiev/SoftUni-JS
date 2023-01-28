const router = require('express').Router();
const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');

router.get('/:cubeId', async (req, res) => {
    const cube = await Cube.findById(req.params.cubeId).populate('accessories').lean();

    res.render('details', { title: 'Cubicle - Details', cube });
});

router.get('/:cubeId/attach', async (req, res) => {
    const cube = await Cube.findById(req.params.cubeId).lean();
    const accessory = await Accessory.find().where('_id').nin(cube.accessories).lean();

    res.render('create/attachment', { title: 'Cubicle - Attach a new accessory', cube, accessory });
});

router.post('/:cubeId/attach', async (req, res) => {
    const cube = await Cube.findById(req.params.cubeId);
    const accessoryId = req.body.accessory;
    cube.accessories.push(accessoryId);

    cube.save();

    res.redirect(`/`);
});

module.exports = router;