const homeController = require('../controllers/homeController');
const createController = require('../controllers/createController');
const detailsController = require('../controllers/detailsController');

module.exports = (app) => {
    // TODO...
    app.use((req, res, next) => {
        console.log('>>>', req.method, req.url);
        next();
    })

    app.use('/', homeController);
    app.use('/create', createController);
    app.use('/details', detailsController);

    app.get('/about', (req, res) => {
        res.render('about');
    });


    app.get('*', (req, res) => {
        res.status(404).render('404');
    });

};