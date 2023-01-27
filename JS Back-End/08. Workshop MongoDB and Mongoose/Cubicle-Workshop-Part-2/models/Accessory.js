const { Schema, model, Types } = require('mongoose');

const accessorySchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true, maxLength: 500 },
    imageUrl: { type: String, required: true},
    cubes: [{ type: Types.ObjectId, ref: 'Cube' }]
})

const Accessory = model('accessories', accessorySchema);

module.exports = Accessory;