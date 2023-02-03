const { Schema, model } = require('mongoose');
const validator = require('mongoose-validators');

const accessorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: (value) => validator.isURL(value, { protocols: ['http', 'https'] }),
            message: '{VALUE} is not a valid HTTP or HTTPS URL!'
        }
    },
    description: {
        type: String,
        required: true,
        maxLength: 500
    },
});

const Accessory = model('Accessory', accessorySchema);

module.exports = Accessory;