const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const core = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();
app.use(cookieParser());
app.use(core()); // Reverted back to 'core'

const PORT = 5000;
const { mogoUrl } = require("./keys");

require("./models/User");

const requireToken = require("./middleware/requireToken");
const authRoutes = require("./routes/authRoutes");
app.use(bodyParser.json());
app.use(authRoutes);

mongoose.connect(mogoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("connected to mongo yeahh");
});

mongoose.connection.on("error", (err) => {
  console.log("this is error", err);
});

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", requireToken, (req, res) => {
  res.send({ email: req.user.email });
});

app.get("/images", (req, res) => {
  const fs = require("fs");
  const uploadsDir = path.join(__dirname, "uploads");

  fs.readdir(uploadsDir, (err, files) => {
    if (err) {
      console.error("Error reading uploads directory:", err);
      return res.status(500).json({ error: "Failed to list files" });
    }
    // Filter the files array if you want to limit to specific file types
    res.json(files); // Send the list of files as a JSON response
  });
});

app.listen(PORT, () => {
  console.log("server running " + PORT);
});
