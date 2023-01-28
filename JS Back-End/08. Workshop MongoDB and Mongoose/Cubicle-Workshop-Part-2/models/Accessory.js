const { Schema, model, Types } = require('mongoose');

const accessorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return validator.isURL(value, { protocols: ['http', 'https'] });
            },
            message: '{VALUE} is not a valid HTTP or HTTPS URL!'
        }
    },
    description: {
        type: String,
        required: true,
        maxLength: 50
    },
});

const Accessory = model('Accessory', accessorySchema);

module.exports = Accessory;