const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  const hash = await bcrypt.hash(password, 10);

  const user = new User({ name, email, passwordHash: hash, role: "user" });

  await user.save();
  res.send("User registered");
};
