const patientRoutes = require("express").Router();
const isLoggedIn = require("../middleware/middleware");
const checkRole = require("../middleware/checkRole");
const patientController = require("../controller/patientController");
const asyncErrorHandle = require("../services/asyncErrorHandle");

patientRoutes
  .route("/patient")
  .get(isLoggedIn, asyncErrorHandle(patientController.getPatientData))
  .post(
    isLoggedIn,
    checkRole("admin", "doctor"),
    asyncErrorHandle(patientController.addPatientData)
  );

patientRoutes
  .route("/patient/:id")
  .patch(isLoggedIn, asyncErrorHandle(patientController.updatePatient))
  .delete(isLoggedIn, asyncErrorHandle(patientController.deletePatient))
  .get(isLoggedIn, asyncErrorHandle(patientController.singlepatient));

module.exports = patientRoutes;
