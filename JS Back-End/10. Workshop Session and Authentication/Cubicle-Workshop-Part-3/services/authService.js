const User = require('../models/User');
const { jwt } = require('../utils/jsonwebtoken');

// Define a secret key for signing the JWT
const secret = require('../config/config').development.SECRET;

const getUser = async (username) => {
    try {
        return await User.findOne({ username });
    } catch (error) {
        throw new Error(`Failed to get user: ${error.message}`);
    }
};

const checkUsernameExists = async (username) => {
    const user = await getUser(username);
    return !!user;
};

const register = async (username, password) => {
    //create user in MongoDB
    return User.create({ username, password });
};

const login = async (username, password) => {
    const user = await getUser(username);

    if (!user) {
        throw new Error('Username or password is incorrect');
    }

    const isValid = await user.validatePassword(password);

    if (!isValid) {
        throw new Error('Username or password is incorrect');
    }

    // If the credentials are valid, create and sign a JWT
    const payload = { username: user.username };
    const token = await jwt.sign(payload, secret, { expiresIn: '4h' });


    return token;
};

module.exports = { getUser, checkUsernameExists, register, login };