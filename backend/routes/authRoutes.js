const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer'); // Import multer
const { jwtkey } = require('../keys');
const router = express.Router();
const User = mongoose.model('User');

// Multer setup for file uploads with disk storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Specify the folder to save the uploaded files
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Rename the file to include timestamp
    },
});

const upload = multer({ storage: storage }); // Create multer instance with storage configuration

// Middleware to authenticate users
const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Extract token from authorization header
    if (!token) {
        return res.status(403).send({ error: 'No token provided, access forbidden.' });
    }
    jwt.verify(token, jwtkey, (err, decoded) => {
        if (err) {
            return res.status(403).send({ error: 'Failed to authenticate token.' });
        }
        req.userId = decoded.userId; // Save the user ID for further use
        next();
    });
};

// Sample route to test API
router.post('/', (req, res) => {
    res.send("Hello");
});

// User signup route
router.post('/signup', async (req, res) => {
    const { username, email, password, className, catagory } = req.body;

    // Check if all fields are provided
    if (!username || !email || !password || !className || !catagory) {
        return res.status(422).send({ error: "Please provide username, email, password, className, catagory" });
    }

    try {
        // Check if user with this email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(422).send({ error: "User with this email already exists." });
        }

        // Create a new user with the hashed password
        const user = new User({ username, email, password, catagory, className });
        await user.save();

        // Create JWT token
        const token = jwt.sign({ userId: user._id }, jwtkey);
        res.send({ message: "Signed up successfully!", token, success: true });
    } catch (err) {
        console.error(err); // Log error for debugging
        return res.status(422).send({ error: "Signup failed, please try again." });
    }
});

// User signin route
router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).send({ error: "Must provide email and password" });
    }

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(422).send({ error: "Invalid email or password" });
    }

    try {
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(422).send({ error: "Invalid email or password" });
        }

        const token = jwt.sign({ userId: user._id }, jwtkey);
        res.send({ message: "Login successful!", token, success: true });
    } catch (err) {
        console.error(err); // Log error for debugging
        return res.status(422).send({ error: "Login failed, please try again." });
    }
});

// File upload route (protected by authentication)
router.post('/uploadFile', authenticate, upload.single('file'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send({ error: 'No file uploaded' });
        }
        // Here you can process the file as needed, e.g., saving metadata in the database
        res.send({ message: 'File uploaded successfully!', file: req.file });
    } catch (error) {
        console.error(error); // Log error for debugging
        res.status(500).send({ error: 'File upload failed, please try again.' });
    }
});

// Route to get students based on category
router.get('/students', async (req, res) => {
    try {
        const students = await User.find({ catagory: 'student' });

        if (!students || students.length === 0) {
            return res.status(404).send({ message: "No students found" });
        }

        res.send(students);
    } catch (err) {
        console.error(err); // Log error for debugging
        return res.status(500).send({ error: "Error fetching students" });
    }
});

module.exports = router;
