const router = require('express').Router();

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Cubicle'
    });
});

module.exports = router;