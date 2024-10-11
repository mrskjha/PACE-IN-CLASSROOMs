const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const { mogoUrl } = require("./keys");

const app = express();
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(mogoUrl) // Removed deprecated options
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

// Load models
require("./models/User");

const requireToken = require("./middleware/requireToken");
const authRoutes = require("./routes/authRoutes");
app.use(authRoutes);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", requireToken, (req, res) => {
  res.send({ email: req.user.email });
});

// Example to list uploaded images
app.get("/images", (req, res) => {
  const fs = require("fs");
  const uploadsDir = path.join(__dirname, "uploads");

  fs.readdir(uploadsDir, (err, files) => {
    if (err) {
      console.error("Error reading uploads directory:", err);
      return res.status(500).json({ error: "Failed to list files" });
    }
    res.json(files); // Send the list of files as a JSON response
  });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
