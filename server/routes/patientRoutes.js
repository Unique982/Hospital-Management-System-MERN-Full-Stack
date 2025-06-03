const patientRoutes = require("express").Router();
const isAuthenticated = require("../middleware/isAuthenticated");
const checkRole = require("../middleware/checkRole");
const patientController = require("../controller/patientController");

patientRoutes
  .route("/patient")
  .get(patientController.getPatientData)
  .post(
    isAuthenticated,
    checkRole("admin", "doctor"),
    patientController.addPatientData
  );

patientRoutes
  .route("/patient/:id")
  .patch(patientController.updatePatient)
  .delete(patientController.deletePatient)
  .get(patientController.singlepatient);

module.exports = patientRoutes;
