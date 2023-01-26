const { Schema } = require('mongoose');

const accessoriesSchema = new Schema({
    Name: { type: String, required: true },
    Description: { type: String, required: true, max: 200 },
    ImageURL: String,
    DifficultyLevel: { type: Number, required: true, min: 1, max: 10 },
})

module.exports = { accessoriesSchema };