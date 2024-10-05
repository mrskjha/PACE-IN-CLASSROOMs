const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const {jwtkey} = require('../keys')
const router = express.Router();
const User = mongoose.model('User');


router.post('/',(req,res)=>{
    res.send("Hello")
})


router.post('/signup', async (req, res) => {
    const { username, email, password,className,catagory } = req.body;

    // Check if all fields are provided
    if (!username || !email || !password || !className || !catagory ) {
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
        return res.status(422).send({ error: "Signup failed, please try again." });
    }
});

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
      res.send({ message: "Login successful!",token,success: true });
  } catch (err) {
      return res.status(422).send({ error: "Login failed, please try again." });
  }
});

router.get('/students', async (req, res) => {
    try {
        // Assuming "catagory" is used to determine students
        const students = await User.find({ catagory: 'student' });

        if (!students || students.length === 0) {
            return res.status(404).send({ message: "No students found" });
        }

        res.send(students);
    } catch (err) {
        return res.status(500).send({ error: "Error fetching students" });
    }
});


module.exports = router