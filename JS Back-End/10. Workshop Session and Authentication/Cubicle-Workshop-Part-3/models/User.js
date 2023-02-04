const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

UserSchema.pre('save', async function (next) {
    const user = this;

    try {
        // Hash the password
        const hash = await encryptPassword(user.password);
        // Override the cleartext password with the hashed one
        user.password = hash;

        next();
    } catch (error) {
        next(error);
    }
});

UserSchema.methods.encryptPassword = function (password) {
    return bcrypt.hash(password, 10);
}
UserSchema.methods.validatePassword = function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', UserSchema);

module.exports = User;