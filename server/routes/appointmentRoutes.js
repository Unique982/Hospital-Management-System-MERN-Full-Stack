const appointmentRoutes = require("express").Router();
const appointmentController = require("../controller/appointmentController");
appointmentRoutes
  .route("/appointment")
  .get(appointmentController.getAppointment)
  .post(appointmentController.addAppointments);
appointmentRoutes
  .route("/appointment/:id")
  .patch(appointmentController.updateAppointment)
  .delete(appointmentController.deleteAppointment);

module.exports = appointmentRoutes;
