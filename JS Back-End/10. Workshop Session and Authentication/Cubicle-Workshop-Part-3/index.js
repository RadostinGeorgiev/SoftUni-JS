const env = process.env.NODE_ENV || 'development';

const config = require('./config/config')[env];
const app = require('express')();

async function main() {
    
    require('./config/express')(app);
    await require('./config/database')(app);
    require('./config/routes')(app);

    app.listen(config.PORT);
    console.log(`Listening on port ${config.PORT}! Now its up to you...`);
}

// start application
main();