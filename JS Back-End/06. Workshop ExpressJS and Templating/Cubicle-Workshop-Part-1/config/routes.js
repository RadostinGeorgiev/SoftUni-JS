// TODO: Require Controllers...

module.exports = (app) => {
    // TODO...

    app.get('/about', (req, res) => {
        res.render('about')
    });

    app.get('*', (req, res) => {
        res.status(404).render('404');
    });

};