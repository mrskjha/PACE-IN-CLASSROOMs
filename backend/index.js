const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors'); // Changed 'core' to 'cors'
const path = require('path'); // Required for serving static files
const app = express();

app.use(cors()); // Use cors for handling CORS issues

const PORT = 5000;
const { mogoUrl } = require('./keys'); // Make sure this path is correct

require('./models/User'); // Ensure your User model is defined properly

const requireToken = require('./middleware/requireToken');
const authRoutes = require('./routes/authRoutes');
app.use(bodyParser.json());
app.use(authRoutes);

// Connect to MongoDB
mongoose.connect(mogoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// MongoDB connection events
mongoose.connection.on('connected', () => {
    console.log("Connected to MongoDB");
});

mongoose.connection.on('error', (err) => {
    console.log("MongoDB connection error:", err);
});

// Route to serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve static files from the 'uploads' directory

// Define your routes
app.get('/', requireToken, (req, res) => {
    res.send({ email: req.user.email });
});

// Route to fetch the list of uploaded files (this can be modified as needed)
app.get('/images', (req, res) => {
    const fs = require('fs');
    const uploadsDir = path.join(__dirname, 'uploads');

    fs.readdir(uploadsDir, (err, files) => {
        if (err) {
            console.error("Error reading uploads directory:", err);
            return res.status(500).json({ error: 'Failed to list files' });
        }
        // Filter the files array if you want to limit to specific file types
        res.json(files); // Send the list of files as a JSON response
    });
});

// Starting the server
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
