const expressAsyncHandler = require("express-async-handler");
const User = require("../models/userModels");
const generateToken = require("../utils/generateToken");

const registerUser = expressAsyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  // checking duplicacy
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User Already Exists");
  }

  //Create the user
  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Error Occured!");
  }
  res.json({
    name,
    email,
  });
});
const loginUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Username or Password");
  }
});
module.exports = { registerUser, loginUser };
