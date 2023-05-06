const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  age: Number,
  sex: String,
  marital: String,
  occupation: String,
  nationality: String,
  religion: String,
  address: String,
  city: String,
  state: String,
  country: String,
  pincode: String,
  id_Type: String,
  id_No: String,
  blood_Group: String,
  relation: String,
  guardian_name: String,
  econtact: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
