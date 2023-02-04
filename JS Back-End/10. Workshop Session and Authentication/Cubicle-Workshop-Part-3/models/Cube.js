const { Schema, model, Types } = require('mongoose');
const validator = require('mongoose-validators');

const cubeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: 500,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: (value) => validator.isURL(value, { protocols: ['http', 'https'] }),
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
    }],
    creator_id: {
        type: Types.ObjectId,
        ref: 'User'
    }
});

const Cube = model('Cube', cubeSchema);

module.exports = Cube;