const jwt = require("jsonwebtoken");
const { users } = require("../database/connection");
const { promisify } = require("util");

const isAuthenticated = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    console.log(token);
    return res.json({ message: "Please login" });
  }
  // verify token
  // jwt.verify(token, process.env.SECRETKEY, (err, success) => {
  //   if (err) {
  //     res.json({ message: "invalid Token" });
  //   } else {
  //     res.json({ message: "valid  token" });
  //   }
  // });

  try {
    const decoded = await promisify(jwt.verify)(token, process.env.SECRETKEY);
    const userExists = await users.findOne({
      where: {
        id: decoded.id,
      },
    });
    if (!userExists) {
      return res.json({ message: "user doesn't exists" });
    }
    req.user = userExists;
    next();
  } catch (err) {
    return res.json({ message: "invalid token" });
  }
};
module.exports = isAuthenticated;
