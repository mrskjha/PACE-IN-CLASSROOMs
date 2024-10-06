const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const { jwtkey } = require('../keys');

module.exports = async (req, res, next) => {
    // Access the token from cookies
    const token = req.cookies.token; // Ensure cookie-parser is used

    if (!token) {
        return res.status(401).send({ error: "you must be logged in" });
    }

    // Verify the token
    jwt.verify(token, jwtkey, async (err, payload) => {
        if (err) {
            return res.status(401).send({ error: "you must be logged in 2" });
        }

        const { userId } = payload;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(401).send({ error: "User not found" });
        }

        req.user = user; // Attach user info to the request object
        next(); // Proceed to the next middleware
    });
};
