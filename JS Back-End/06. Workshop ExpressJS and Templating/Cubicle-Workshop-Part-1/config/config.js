const path = require('path');

module.exports = {
    development: {
        port: process.env.PORT || 3000,
        dir: {
            root: __dirname,
            static: path.join(__dirname, 'static'),
            views: path.join(__dirname, 'views'),
        }
    },
    production: {}
};