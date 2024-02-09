// Define asyncHandler function
const asyncHandler = fn => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

// Import necessary modules
const User = require("../models/userModel");

// Create a User ----------------------------------------------
const createUser = asyncHandler(async (req, res) => {
  const email = req.body.email;

  // Check if the user with the provided email already exists
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    // If user already exists, return an error
    throw new Error("User already exists");
  }

  // If user doesn't exist, create a new user
  const newUser = await User.create(req.body);
  res.json(newUser);
});

// Login a user ----------------------------------------------
const loginUserCtrl = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Find the user by email
  const user = await User.findOne({ email });

  // Check if the user exists and the password is correct
  if (!user || !user.isValidPassword(password)) {
    // If user doesn't exist or password is incorrect, return an error
    throw new Error("Invalid email or password");
  }

  // If user exists and password is correct, perform login logic (e.g., generate JWT token)
  // Replace the following line with your actual login logic
  res.json({ message: "Login successful", user });
});

module.exports = { createUser, loginUserCtrl };

