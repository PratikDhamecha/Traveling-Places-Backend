const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  placeName: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  placeImages: {
    type: String,
    required: true,
  },
  discription: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Place", placeSchema);
