const lab_technicianRoutes = require("express").Router();
const lab_technicianController = require("../controller/lab_TechnicianController");
lab_technicianRoutes
  .route("/lab-technician")
  .get(lab_technicianController.getLabTechnician)
  .post(lab_technicianController.addLabTechnician);
lab_technicianRoutes
  .route("/lab-technician/:id")
  .patch(lab_technicianController.updateLabTechnician)
  .delete(lab_technicianController.deleteLabTechnician)
  .get(lab_technicianController.singleLabtechnicianData);

module.exports = lab_technicianRoutes;
