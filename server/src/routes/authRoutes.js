const authRouter = require("express").Router();
const authController = require("../controller/auth/authController");
const asyncErrorHandle = require("../services/asyncErrorHandle");
authRouter.route("/login").post(asyncErrorHandle(authController.loginUser));
authRouter
  .route("/register")
  .post(asyncErrorHandle(authController.registerUser));
authRouter
  .route("/forget-password")
  .post(asyncErrorHandle(authController.forgetpassword));
authRouter
  .route("/verify-Otp")
  .post(asyncErrorHandle(authController.verifyOtp));
authRouter
  .route("/reset-Password")
  .post(asyncErrorHandle(authController.resetPassword));

module.exports = authRouter;
