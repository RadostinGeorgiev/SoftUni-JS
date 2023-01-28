const { Schema, model, Types } = require('mongoose');

const cubeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: 50,
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
    difficultyLevel: {
        type: Number,
        required: true,
        max: 6,
        min: 1,
    },
    accessories: [{
        type: Types.ObjectId,
        ref: 'Accessory'
    }]
});

const Cube = model('Cube', cubeSchema);

module.exports = Cube;