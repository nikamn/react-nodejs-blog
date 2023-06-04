const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1].trim();
    console.log(token);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = decode.userId;
    next();
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};
