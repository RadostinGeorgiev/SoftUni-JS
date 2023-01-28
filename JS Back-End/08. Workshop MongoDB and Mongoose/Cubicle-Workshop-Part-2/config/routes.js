const homeController = require('../controllers/homeController');
const cubeController = require('../controllers/cubeController');
const accessoryController = require('../controllers/accessoryController');

module.exports = (app) => {
    //print the current request to the server
    app.use((req, res, next) => {
        console.log('>>>', req.method, req.url);
        next();
    })

    app.use('/', homeController);
    app.use('/cube', cubeController);
    app.use('/accessory', accessoryController);

    app.get('*', (req, res) => {
        res.status(404).render('404');
    });
};