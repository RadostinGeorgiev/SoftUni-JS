const router = require('express').Router();

const { createCube, getCube, editCube, deleteCube, setDifficultyLevel } = require('../services/cubeService');
const { isAuthenticated } = require('../middlewares/guards');

router.get('/create', isAuthenticated, (req, res) => {
    res.render('cube/create');
});

router.post('/create', isAuthenticated, async (req, res) => {
    if (!req.body) return res.sendStatus(400);

    const { name, description, imageUrl, difficultyLevel } = req.body;
    const cube = await createCube({
        name,
        description,
        imageUrl,
        difficultyLevel,
        owner: req.user._id,
    });

    res.redirect(`/${cube._id}/attach`);
});

router.get('/:cubeId', async (req, res) => {
    const cube = await getCube(req.params.cubeId);
    cube.isOwner = cube.owner == req.user._id;

    res.render('cube/details', { cube });
});

router.get('/:cubeId/attach', isAuthenticated, async (req, res) => {
    const cube = await getCube(req.params.cubeId)
    const accessory = await Accessory.find().where('_id').nin(cube.accessories).lean();

    res.render('cube/attachment', { cube, accessory });
});

router.post('/:cubeId/attach', isAuthenticated, async (req, res) => {
    const cube = await getCube(req.params.cubeId);

    const accessoryId = req.body.accessory;
    cube.accessories.push(accessoryId);

    await cube.save();

    res.redirect(`/`);
});

router.get('/:cubeId/edit', isAuthenticated, async (req, res) => {
    const cube = await getCube(req.params.cubeId);
    const options = setDifficultyLevel(cube.difficultyLevel);

    res.render('cube/edit', { cube, options });
});

router.post('/:cubeId/edit', isAuthenticated, async (req, res) => {
    if (!req.body) return res.sendStatus(400);

    const { name, description, imageUrl, difficultyLevel } = req.body;
    const cube = await editCube(req.params.cubeId, {
        name,
        description,
        imageUrl,
        difficultyLevel,
        owner: req.user._id,
    });

    res.redirect(`/cube/${cube._id}`);
});

router.get('/:cubeId/delete', isAuthenticated, async (req, res) => {
    const cube = await getCube(req.params.cubeId);
    const options = setDifficultyLevel(cube.difficultyLevel);

    res.render('cube/delete', { cube, options });
});

router.post('/:cubeId/delete', isAuthenticated, async (req, res) => {
    await deleteCube(req.params.cubeId);

    res.redirect(`/`);
});

module.exports = router;