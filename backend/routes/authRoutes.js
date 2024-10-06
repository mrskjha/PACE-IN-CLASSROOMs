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

router.post('/', (req, res) => {
    res.send("Hello");
});

router.post('/signup', async (req, res) => {
    const { username, email, password, className, category } = req.body;

    // Check if all fields are provided
    if (!username || !email || !password || !className || !category) {
        return res.status(422).json({ error: "Please provide all the required fields" });
    }

    try {
        // Check if user with this email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(422).json({ error: "User with this email already exists." });
        }

        

        // Create a new user
        const user = new User({
            username,
            email,
            password, // Save hashed password
            className,
            category
        });
        await user.save();

        // Create JWT token
        const token = jwt.sign({ userId: user._id }, jwtkey, { expiresIn: '1h' });
        res.status(201).json({ message: "Signed up successfully!", token, success: true });
    } catch (err) {
        console.error(err); // Log error for debugging
        res.status(500).json({ error: "Signup failed, please try again." });
    }
});


// Example login route
router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    // Find the user and verify the password (implement your logic)
    const user = await User.findOne({ email });
    if (!user || !await user.comparePassword(password)) {
        return res.status(401).json({ success: false, error: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, jwtkey, { expiresIn: '1h' });

    // Set the token as a cookie
    res.cookie('token', token, {
        httpOnly: true, // Prevents client-side access
        secure: process.env.NODE_ENV === 'production', // Set to true in production
        maxAge: 3600000, // 1 hour
    });

    res.status(200).json({ success: true });
});

router.get('/students', async (req, res) => {
    try {
        // Ensure correct spelling for "category"
        const category = req.query.category || 'student'; // Use query param for category filtering

        // Fetch students based on the category
        const students = await User.find({ category }); // Correct spelling to 'category'

        // Check if students were found
        if (!students || students.length === 0) {
            return res.status(404).send({ message: "No students found" });
        }

        res.status(200).send(students); // Send the list of students with a 200 status
    } catch (err) {
        console.error("Error fetching students:", err); // Log error for debugging
        return res.status(500).send({ error: "Error fetching students" });
    }
});


// File upload route
router.post('/uploadFile', upload.single('file'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send({ error: 'No file uploaded' });
        }
        // Here you can process the file as needed
        res.send({ message: 'File uploaded successfully!', file: req.file });
    } catch (error) {
        console.error(error); // Log error for debugging
        res.status(500).send({ error: 'File upload failed, please try again.' });
    }
});

module.exports = router;
