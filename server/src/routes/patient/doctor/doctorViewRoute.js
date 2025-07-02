const doctorRouter = require("express").Router();
const doctorController = require("../../../controller/patient/doctor/doctorViewController");
const isLoggedIn = require("../../../middleware/middleware");
const asyncErrorHandle = require("../../../services/asyncErrorHandle");

doctorRouter
  .route("/")
  .get(isLoggedIn, asyncErrorHandle(doctorController.getDoctor));
module.exports = doctorRouter;
