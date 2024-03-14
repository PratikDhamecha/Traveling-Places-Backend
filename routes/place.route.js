const express = require("express");
const router = express.Router();
const multer = require("multer");

const {
  getAllPlaces,
  createNewPlace,
  updatePlace,
  deletePlace,
  getPlaceById,
} = require("../controller/placeController");

router
  .route("/")
  .get(getAllPlaces)
  .post(createNewPlace)
  .put(updatePlace)
  .delete(deletePlace);

router.route("/:id").get(getPlaceById).delete(deletePlace);
router.route("/updatePlace/:id").put(updatePlace);

module.exports = router;
