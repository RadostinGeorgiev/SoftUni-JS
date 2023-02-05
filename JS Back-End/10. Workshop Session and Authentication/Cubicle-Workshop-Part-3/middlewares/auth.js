const { jwt } = require('../utils/jsonwebtoken');

const SECRET = require('../config/config').development.TOKEN_SECRET;
const TOKEN_NAME = require('../config/config').development.TOKEN_NAME;

exports.authenticate = async (req, res, next) => {
    const token = req.cookies[TOKEN_NAME];

    if (token) {
        try {
            const decoded = await jwt.verify(token, SECRET);
            req.user = decoded;
            req.isAuthenticated = true;
        } catch (error) {
            console.log('Authentication failed');

            res.clearCookie(TOKEN_NAME);
            return res.status(401)
                .redirect('/login');
        }
    }

    next();
};