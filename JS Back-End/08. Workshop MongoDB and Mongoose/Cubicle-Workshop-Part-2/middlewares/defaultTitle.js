module.exports = (title) => (req, res, next) => {
    res.locals.title = title;
    next();
};