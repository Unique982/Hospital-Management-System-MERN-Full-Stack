const appointmentRoutes = require("express").Router();
const appointmentController = require("../controller/appointmentController");
const asyncErrorHandle = require("../services/asyncErrorHandle");
const isLoggedIn = require("../middleware/middleware");
appointmentRoutes
  .route("/appointment")
  .get(isLoggedIn, asyncErrorHandle(appointmentController.getAppointment))
  .post(isLoggedIn, asyncErrorHandle(appointmentController.addAppointments));
appointmentRoutes
  .route("/appointment/:id")
  .patch(isLoggedIn, asyncErrorHandle(appointmentController.updateAppointment))
  .delete(
    isLoggedIn,
    asyncErrorHandle(appointmentController.deleteAppointment)
  );

module.exports = appointmentRoutes;
