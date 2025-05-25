const doctorRouter = require("express").Router();
const doctorController = require("../controller/doctorController");

doctorRouter
  .route("/doctor")
  .get(doctorController.getDoctor)
  .post(doctorController.addDoctor);
doctorRouter
  .route("/doctor/:id")
  .patch(doctorController.updateDoctor)
  .delete(doctorController.deleteDoctor);
module.exports = doctorRouter;
