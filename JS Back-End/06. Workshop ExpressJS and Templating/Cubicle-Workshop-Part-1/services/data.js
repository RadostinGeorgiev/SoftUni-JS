const fs = require('fs');

getItems = () => fs.readFile('./config/database.json', (error, data) => {
    console.log(error);
    console.log(JSON.parse(data.toString()));

    return JSON.parse(data.toString());
});

module.exports = {
    getItems
}