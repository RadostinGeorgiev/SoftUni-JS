const { jwt } = require('../utils/jsonwebtoken');

const secret = require('../config/config').development.SECRET;

const authenticate = async (req, res, next) => {
    const token = req.cookies['auth'];

    if (token) {
        try {
            const decoded = await jwt.verify(token, secret);
            req.user = decoded;
        } catch (error) {
            console.log('Authentication failed');
            
            res.clearCookie('auth');
            return res.status(401)
                .redirect('/404');
        }
    }

    next();
};

module.exports = authenticate;