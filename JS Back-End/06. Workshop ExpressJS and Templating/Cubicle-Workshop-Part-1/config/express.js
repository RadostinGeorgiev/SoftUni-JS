const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

module.exports = (app) => {
    const hbs = handlebars.create({ extname: '.hbs' });

    //TODO: Setup the view engine
    app.engine('.hbs', hbs.engine);
    app.set('view engine', '.hbs');

    //TODO: Setup the body parser

    //TODO: Setup the static files
    app.use(express.static('static'));
};