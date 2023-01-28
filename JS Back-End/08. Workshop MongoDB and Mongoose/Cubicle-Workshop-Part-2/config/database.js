const mongoose = require('mongoose');
const database = 'mongodb://127.0.0.1:27017/cubicle';

module.exports = (app) => {
    mongoose.set('strictQuery', false);
    mongoose.connect(database, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const db = mongoose.connection;
    db.on('error', (err) => {
        console.log(err.message);
    });
    db.on('open', () => {
        console.log("Database connected");
    });

    // listen for process break (ctrl-c)
    process.on("SIGINT", async () => {
        await mongoose.disconnect();
        console.log("Application finish");
        process.exit();
    });
}