const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

const Cube = require('../models/Cube');
const database = require('../config/database.json');

function save(cube) {
    cube.id = uuid.v4();
    database.cubes.push(cube);

    filePath = path.normalize(path.join(__dirname, '../config/database.json'));

    fs.writeFile(filePath, JSON.stringify(database, null, 2), (err) => {
        if (err) throw err;
        console.log('File was uploaded successfully!');
    });
}

module.exports = { save }