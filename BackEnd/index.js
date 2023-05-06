const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./userSchema");

const MONGODB_URI = "mongodb://127.0.0.1:27017/userdatabase";

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const server = express();

server.use(cors());
server.use(express.json());

// Route to create a new user //

server.post("/user", async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    console.log(savedUser);
    res.status(200).send("User saved successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error saving user");
  }
});

// Route to get all users from the database //

server.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error retrieving users");
  }
});

server.listen(8080, () => {
  console.log("server started");
});
