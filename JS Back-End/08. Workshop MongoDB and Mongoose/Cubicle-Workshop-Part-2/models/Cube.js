const { Schema, model } = require('mongoose');

const cubeSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true, maxLength: 200 },
    imageUrl: { type: String, required: true},
    difficultyLevel: { type: Number, required: true, min: 1, max: 10 },
})

const Cube = model('Cube', cubeSchema);

module.exports = Cube;