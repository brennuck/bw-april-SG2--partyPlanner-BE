const jwt = require("jsonwebtoken");

const jwtKey =
  process.env.JWT_SECRET ||
  "add an .env file to the root of the project with jwt secret";

module.exports = {
  authenticate
};

function authenticate(req, res, next) {
  const token = req.get("Authorization");

  if (token) {
    jwt.verify(token, jwtKey, (err, decoded) => {
      if (err) return res.status(201).json(err);

      req.decoded = decoded;

      next();
    });
  } else {
    return res.status(401).json({
      error: "You do not have access to these parties."
    });
  }
}
