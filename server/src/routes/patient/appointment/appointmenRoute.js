const appointmentRoute = require("express").Router();
const appointmentController = require("../../../controller/patient/appointment/appointmentController");
const checkRole = require("../../../middleware/checkRole");
const isLoggedIn = require("../../../middleware/middleware");
const asyncErrorHandle = require("../../../services/asyncErrorHandle");

appointmentRoute
  .route("/")
  .post(isLoggedIn, asyncErrorHandle(appointmentController.bookingAppointment))
  .get(isLoggedIn, asyncErrorHandle(appointmentController.getAppointment));

appointmentRoute
  .route("/:id")
  .patch(isLoggedIn, asyncErrorHandle(appointmentController.cancellAppointment))
  .delete(
    isLoggedIn,
    asyncErrorHandle(appointmentController.deleteAppointment)
  );

module.exports = appointmentRoute;
