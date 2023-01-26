const env = process.env.NODE_ENV || 'development';
const connection = 'mongodb://127.0.0.1:27017/cubicle';

const config = require('./config/config')[env];
const app = require('express')();
const { default: mongoose } = require('mongoose');

require('./config/express')(app);
require('./config/routes')(app);

async function main() {

    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(connection, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        mongoose.connection.on('error', (err) => {
            console.log(err);
        });
        console.log("Database connected");

        app.listen(config.port);
        console.log(`Listening on port ${config.port}! Now its up to you...`);
    }
    catch (err) {
        return console.log(err.message);
    }
}

// start application
main();

// listen for process break (ctrl-c)
process.on("SIGINT", async () => {

    await mongoose.disconnect();
    console.log("Application finish");
    process.exit();
});