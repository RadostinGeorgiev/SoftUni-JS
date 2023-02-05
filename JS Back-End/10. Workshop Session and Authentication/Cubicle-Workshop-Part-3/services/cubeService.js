const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');

const createCube = (name, description, imageUrl, difficultyLevel) => {
    const cube = new Cube({ name, description, imageUrl, difficultyLevel });
    const cubeId = cube.save();

    return cubeId;
}

const getCube = (cubeId) => Cube.findById(cubeId).populate('accessories').lean();

const editCube = async (cubeId, name, description, imageUrl, difficultyLevel) => {
    try {
        const cube = await Cube.findByIdAndUpdate(cubeId,
            { name, description, imageUrl, difficultyLevel },
            {
                new: true,
                runValidators: true,
                lean: true
            }).exec();

            return cube;

    } catch (error) {
        console.error(error.message)
    }
}

const deleteCube = async (cubeId) => {
    try {
        await Cube.findByIdAndDelete(cubeId).exec();
    } catch (error) {
        console.error(error.message)
    }
}

const setDifficultyLevel = (difficulty) => {
    const options =
        [
            { value: '1', label: 'Very Easy' },
            { value: '2', label: 'Easy' },
            { value: '3', label: 'Medium (Standard 3x3)' },
            { value: '4', label: 'Intermediate' },
            { value: '5', label: 'Expert' },
            { value: '6', label: 'Hardcore' },
        ].map(x => x.value == difficulty
            ? { ...x, selected: true }
            : x)

    return options;
}

module.exports = { createCube, getCube, editCube, deleteCube, setDifficultyLevel };