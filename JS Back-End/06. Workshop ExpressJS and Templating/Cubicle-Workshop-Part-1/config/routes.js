const homeController = require('../controllers/homeController')
// TODO: Require Controllers...

module.exports = (app) => {
    // TODO...

    app.get('/', homeController);

    app.get('/about', (req, res) => {
        res.render('about')
    });

    app.get('/create', (req, res) => {
        res.render('create')
    });

    app.get('*', (req, res) => {
        res.status(404).render('404');
    });

};