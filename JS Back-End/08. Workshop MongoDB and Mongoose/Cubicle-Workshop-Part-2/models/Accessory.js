const { Schema, model } = require('mongoose');

const accessorySchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true, max: 200 },
    imageUrl: String,
    difficultyLevel: { type: Number, required: true, min: 1, max: 10 },
})

const Accessory  = model('accessories', accessorySchema);

module.exports = Accessory;