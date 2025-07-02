const lab_technicianRoutes = require("express").Router();
const lab_technicianController = require("../controller/lab_TechnicianController");
const asyncErrorHandle = require("../services/asyncErrorHandle");
lab_technicianRoutes
  .route("/lab-technician")
  .get(asyncErrorHandle(lab_technicianController.getLabTechnician))
  .post(asyncErrorHandle(lab_technicianController.addLabTechnician));
lab_technicianRoutes
  .route("/lab-technician/:id")
  .patch(asyncErrorHandle(lab_technicianController.updateLabTechnician))
  .delete(asyncErrorHandle(lab_technicianController.deleteLabTechnician))
  .get(asyncErrorHandle(lab_technicianController.singleLabtechnicianData));

module.exports = lab_technicianRoutes;
