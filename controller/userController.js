const User = require("../model/User");

const createNewUser = async (req, res) => {
  if (!req?.body?.userName || !req?.body?.password) {
    return res
      .status(400)
      .json({ message: "Username and Password is required" });
  }
  const newUser ={};
  if (req.body?.firstName) newUser.firstName = req.body.firstName;
  if (req.body?.lastName) newUser.lastName = req.body.lastName;
  if (req.body?.email) newUser.email = req.body.email;
  if (req.body?.mobile) newUser.mobile = req.body.mobile;
  if (req.body?.password) newUser.password = req.body.password;
  if (req.body?.imageURL) newUser.imageURL = req.body.imageURL;
  if (req.body?.userName) newUser.userName = req.body.userName;
  
  try {
    console.log(1);
    // await newUser.save();
    const result = await User.create(newUser);
    console.log(result);
    res.status(201).json({ success: true,data:result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  // if (!req?.body?.id) {
  //   return res.status(400).json({ message: "ID is required" });
  // }

  // jenish removed .exec() at end because it is optional
  const user = await User.findOne({ _id: req.params.id });

  if (!user) {
    return res
      .status(204)
      .json({ message: `ID: ${req.body.id} does not match` });
  }

  //   it is user not newUser
  // if (req.body?.firstName) newUser.firstName = req.body.firstName;
  // if (req.body?.lastName) newUser.lastName = req.body.lastName;
  // if (req.body?.email) newUser.email = req.body.email;
  // if (req.body?.mobile) newUser.mobile = req.body.mobile;
  // if (req.body?.password) newUser.password = req.body.password;
  // if (req.body?.imageURL) newUser.imageURL = req.body.imageURL;
  // if (req.body?.userName) newUser.userName = req.body.userName;

  if (req.body?.firstName) user.firstName = req.body.firstName;
  if (req.body?.lastName) user.lastName = req.body.lastName;
  if (req.body?.email) user.email = req.body.email;
  if (req.body?.mobile) user.mobile = req.body.mobile;
  if (req.body?.password) user.password = req.body.password;
  if (req.body?.imageURL) user.imageURL = req.body.imageURL;
  if (req.body?.userName) user.userName = req.body.userName;
 
  const result = await user.save();
  res.json({ success: true, result: result });
};

const getUserId = async (req, res) => {
  if (!req?.params?.id) {
    return res.status(400).json({ message: "ID is required" });
  }

  const user = await User.findOne({ _id: req.params.id }).exec();

  if (!user) {
    return res
      .status(204)
      .json({ message: `ID: ${req.params.id} does not match` });
  }

  res.json(user);
};                                                                                                           

const deleteUser = async (req, res) => {
  // if (!req?.body?.id) {
  //   return res.status(400).json({ message: "ID is required" });
  // }

  const user = await User.findOne({ _id: req.params.id }).exec();

  if (!user) {
    return res
      .status(204)
      .json({ message: `ID: ${req.params.id} does not match` });
  }

  //   used findByIdAndDelete method
  //   const result = await place.deleteOne({ _id: req.body.id });

  const result = await User.findByIdAndDelete(req.params.id);
  res.json({ success: true, result: result });
};

module.exports = {
  createNewUser,
  updateUser,
  getUserId,
  deleteUser,
};
