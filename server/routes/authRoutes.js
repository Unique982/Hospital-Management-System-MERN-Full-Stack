const authRouter = require("express").Router();
const authController = require("../controller/auth/authController");
authRouter.route("/login").post(authController.loginUser);
authRouter.route("/register").post(authController.registerUser);
authRouter.route("/forget-password").post(authController.forgetpassword);
authRouter.route("/verify-Otp").post(authController.verifyOtp);
authRouter.route("/reset-Password").post(authController.resetPassword);

module.exports = authRouter;
