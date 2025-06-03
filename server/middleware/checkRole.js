const checkRole = (...roles) => {
  return (req, res, next) => {
    const userRole = req.user.role;
    console.log(userRole);
    console.log(roles);
    if (!roles.includes(userRole)) {
      res.json({ message: "user not authorized" });
    } else {
      next();
    }
  };
};
module.exports = checkRole;
