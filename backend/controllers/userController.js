const User = require('../models/User');

// Register a new user
const registerUser = async (req, res) => {
  const { name, email, password, role, calendlyLink } = req.body;

  // Check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Create new user
  const user = new User({
    name,
    email,
    password, // You should hash this password before saving
    role,
    calendlyLink,
  });

  await user.save();

  res.status(201).json({
    message: 'User registered successfully',
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      calendlyLink: user.calendlyLink,
    },
  });
};

module.exports = { registerUser };
