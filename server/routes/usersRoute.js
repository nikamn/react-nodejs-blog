const User = require("../models/usersModel");

const router = require("express").Router();

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  try {
    if (await User.findOne({ email: req.body.email })) {
      res.send({
        success: false,
        message: "User alreasy exists",
      });
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      req.body.password = hashedPassword;

      const newUser = new User(req.body);
      await newUser.save();

      res.send({
        success: true,
        message: "User registered successfully",
      });
    }
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.send({
        success: false,
        message: "User does not exist",
      });
    } else if (!(await bcrypt.compare(req.body.password, user.password))) {
      res.send({
        success: false,
        message: "Password is incorrect",
      });
    } else {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      res.send({
        success: true,
        message: "User logged in successfully",
        data: token,
      });
    }
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
