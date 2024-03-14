const express = require("express");
const router = express.Router();

const {
  createNewUser,
  updateUser,
  getUserId,
  deleteUser,
} = require("../controller/userController");

router.route("/").post(createNewUser).put(updateUser);
router.route("/:id").get(getUserId).delete(deleteUser);
router.route("/updateUser/:id").put(updateUser);

module.exports = router;
