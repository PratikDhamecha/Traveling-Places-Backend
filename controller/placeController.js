// Jenish add proper import
const Place = require("../model/Place");

const getAllPlaces = async (req, res) => {
  //   console.log("getAllPlaces");
  const places = await Place.find();
  if (!places) {
    return res.status(204).json({ message: "No Places Found!" });
  }
  res.json(places);
};

const createNewPlace = async (req, res) => {
  if (!req?.body?.placeName || !req?.body?.pincode) {
    return res
      .status(400)
      .json({ message: "PlaceName and Pincode is required" });
  }
  const newPlace = {};
  if (req.body?.placeName) newPlace.placeName = req.body.placeName;
  if (req.body?.pincode) newPlace.pincode = req.body.pincode;
  if (req.body?.city) newPlace.city = req.body.city;
  if (req.body?.placeImages) newPlace.placeImages = req.body.placeImages;
  if (req.body?.discription) newPlace.discription = req.body.discription;

  try {
    const result = await Place.create(newPlace);
    res.status(201).json({ success: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePlace = async (req, res) => {
  // if (!req?.body?.id) {
  //   return res.status(400).json({ message: "ID is required" });
  // }

  const place = await Place.findOne({ _id: req.params.id }).exec();

  if (!place) {
    return res
      .status(204)
      .json({ message: `ID: ${req.body.id} does not match` });
  }

  //   if (req.body?.placeName) newPlace.placeName = req.body.placeName;
  //   if (req.body?.pincode) newBill.pincode = req.body.pincode;
  //   if (req.body?.city) newBill.city = req.body.city;
  //   if (req.body?.placeImages) newBill.placeImages = req.body.placeImages;
  //   if (req.body?.discription) newBill.discription = req.body.discription;

  if (req.body?.placeName) place.placeName = req.body.placeName;
  if (req.body?.pincode) place.pincode = req.body.pincode;
  if (req.body?.city) place.city = req.body.city;
  if (req.body?.placeImages) place.placeImages = req.body.placeImages;
  if (req.body?.discription) place.discription = req.body.discription;

  const result = await place.save();
  res.json({ success: true, result: result });
};

const deletePlace = async (req, res) => {
  // if (!req?.body?.id) {
  //   return res.status(400).json({ message: "ID is required" });
  // }

  const place = await Place.findOne({ _id: req.params.id }).exec();

  if (!place) {
    return res
      .status(204)
      .json({ message: `ID: ${req.body.id} does not match` });
  }

  //   used findByIdAndDelete method
  //   const result = await place.deleteOne({ _id: req.body.id });

  const result = await Place.findByIdAndDelete(req.params.id);
  res.json({ success: true, result: result });
};

const getPlaceById = async (req, res) => {
  if (!req?.params?.id) {
    return res.status(400).json({ message: "ID is required" });
  }

  const place = await Place.findOne({ _id: req.params.id }).exec();

  if (!place) {
    return res
      .status(204)
      .json({ message: `ID: ${req.params.id} does not match` });
  }

  res.json(place);
};

module.exports = {
  getAllPlaces,
  createNewPlace,
  updatePlace,
  deletePlace,
  getPlaceById,
};
