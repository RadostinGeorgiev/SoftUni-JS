const homeController = require('../controllers/homeController');
const createController = require('../controllers/createController');
const detailsController = require('../controllers/detailsController');

module.exports = (app) => {
    //print the current request to the server
    app.use((req, res, next) => {
        console.log('>>>', req.method, req.url);
        next();
    })

    app.use('/', homeController);
    app.use('/create', createController);
    app.use('/details', detailsController);
    app.get('/about', (req, res) => {
        res.render('about', { title: 'Cubicle - About Page' });
    });

    app.get('*', (req, res) => {
        res.status(404).render('404');
    });
};