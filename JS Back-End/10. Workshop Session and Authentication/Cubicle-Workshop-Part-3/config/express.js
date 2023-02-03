const express = require('express');
const handlebars = require('express-handlebars');

const title = require('../middlewares/defaultTitle');
const config = require('./config');

module.exports = (app) => {
    //Setup the view engine
    app.engine('hbs', handlebars.engine({
        extname: 'hbs'
    }));
    app.set('view engine', 'hbs');

    //Setup the body parser
    app.use(express.urlencoded({ extended: false }))                         // parse application/x-www-form-urlencoded

    // Setup the static files
    app.use(express.static('static'));

    //TODO: Setup the default title
    app.use(title('Cubicle'));
};