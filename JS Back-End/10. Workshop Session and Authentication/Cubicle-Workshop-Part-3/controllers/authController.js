const router = require('express').Router();
const cookieParser = require('cookie-parser');

const { isAuthenticated } = require('../middlewares/guards');
const authService = require('../services/authService');
const TOKEN_NAME = require('../config/config').development.TOKEN_NAME;

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', async (req, res) => {
    try {
        const { username, password, repeatPassword } = req.body;

        if (password !== repeatPassword) {
            console.log(`Passwords don't match`);
            return res.redirect('404');
        }

        // Check if username already exists
        const existingUser = await authService.checkUsernameExists(username);
        if (existingUser) {
            console.log('Username already exists');
            return res.status(409)
                .redirect('404');
        }

        const user = await authService.register(username, password);
        // Return success message
        console.log('Successfully registered');
        res.status(200)
            .redirect('/');

    } catch (error) {
        // Return error message
        console.log(`Failed to register user: ${error.message}`);
        res.status(500);
    }
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        const token = await authService.login(username, password);
        res.cookie(TOKEN_NAME, token, { httpOnly: true });

        // Return success message
        console.log('Successfully logged in');
        res.status(200);

    } catch (error) {
        // Return error message
        console.log(`Failed to login user: ${error.message}`);
        res.status(500);
    }

    res.redirect('/');
});

router.get('/logout', isAuthenticated, (req, res) => {
    res.clearCookie(TOKEN_NAME);
    return res.status(200)
        .redirect('/');
});

module.exports = router;