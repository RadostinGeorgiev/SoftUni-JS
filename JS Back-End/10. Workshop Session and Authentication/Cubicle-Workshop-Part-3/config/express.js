const express = require('express');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');

const auth = require('../middlewares/auth');
const title = require('../middlewares/defaultTitle');

module.exports = (app) => {
    //Setup the view engine
    app.engine('hbs', handlebars.engine({
        extname: 'hbs'
    }));
    app.set('view engine', 'hbs');

    //Setup the body parser
    app.use(express.urlencoded({ extended: false }));

    //Setup the cookie parser
    app.use(cookieParser());

    // Setup the static files
    app.use(express.static('static'));

    // Setup the Authentication middleware
    app.use(auth);

    //TODO: Setup the default title
    app.use(title('Cubicle'));
};