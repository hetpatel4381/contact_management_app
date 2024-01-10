const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validToken = asyncHandler(async (req, res, next) => {
  try {
    let token;
    let authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer")) {
      token = authHeader.split(" ")[1];

      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
          res.status(401);
          throw new Error("User is not Authorized");
        }
        req.user = decoded.user;
        next();
      });
    } else {
      res.status(401);
      throw new Error("Authorization header is missing or invalid");
    }
  } catch (error) {
    res.status(401).json({ error: "Unauthorized" });
  }
});

module.exports = validToken;
