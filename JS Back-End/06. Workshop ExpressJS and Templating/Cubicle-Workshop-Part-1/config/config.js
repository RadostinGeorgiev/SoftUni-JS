const { sep } = require('path');

module.exports = {
    development: {
        port: process.env.PORT || 3000,
        dir: {
            root: __dirname,
            static: __dirname + 'static' + sep,
            views: __dirname + 'views' + sep
        }
    },
    production: {}
};