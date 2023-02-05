const path = require('path');

module.exports = {
    development: {
        PORT: process.env.PORT || 3000,
        DIR: {
            root: __dirname,
            static: path.join(__dirname, 'static'),
            views: path.join(__dirname, 'views'),
        },
        TOKEN_NAME: 'auth',
        TOKEN_SECRET: 'backend-secret-key',   // Define a secret key for signing the JWT
    },
    production: {}
};