const patientRoutes = require("express").Router();

const patientController = require("../controller/patientController");

patientRoutes
  .route("/patient")
  .get(patientController.getPatientData)
  .post(patientController.addPatientData);

patientRoutes
  .route("/patient/:id")
  .patch(patientController.updatePatient)
  .delete(patientController.deletePatient)
  .get(patientController.singlepatient);

module.exports = patientRoutes;
