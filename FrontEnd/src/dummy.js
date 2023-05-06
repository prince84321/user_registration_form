const express = require("express");
const cors = require("cors");
const server = express();
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/userdatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

// Define a schema for the user data
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  address: String,
  city: String,
  state: String,
  pincode: String,
  id_Type: String,
  id_No: String,
  nationality: String,
  religion: String,
  sex: String,
  age: Number,
  marital: String,
  blood_Group: String,
  guardian_name: String,
  relation: String,
  econtact: String,
});

// Define a model for the user data
const User = mongoose.model("User", userSchema);

// Use middleware to parse the request body
server.use(express.json());

// Use CORS middleware
server.use(cors());

// Define the route to handle user registration
server.post("/registration", async (req, res) => {
  try {
    // Create a new user object from the request body
    const user = new User(req.body);

    // Insert the user object into the database
    await user.save();

    res.status(200).send("User registered successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

server.listen(8080, () => {
  console.log("Server started");
});
