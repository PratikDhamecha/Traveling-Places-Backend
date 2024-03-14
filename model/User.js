const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { stringify } = require("uuid");

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: false,
  },
  imageURL: {
    type: String,
  },
  userName: {
    type: String,
    required: false,
  }
});


module.exports = mongoose.model("User",userSchema);