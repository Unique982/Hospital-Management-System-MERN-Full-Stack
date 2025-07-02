const doctorRouter = require("express").Router();
const doctorController = require("../controller/doctorController");
const asyncErrorHandle = require("../services/asyncErrorHandle");
doctorRouter
  .route("/doctor")
  .get(asyncErrorHandle(doctorController.getDoctor))
  .post(asyncErrorHandle(doctorController.addDoctor));
doctorRouter
  .route("/doctor/:id")
  .patch(asyncErrorHandle(doctorController.updateDoctor))
  .delete(asyncErrorHandle(doctorController.deleteDoctor));
module.exports = doctorRouter;
