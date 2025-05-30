const specializationRoutes = require("express").Router();
const specializationController = require("../controller/specializationController");

specializationRoutes
  .route("/specialization")
  .get(specializationController.getSpecialization)
  .post(specializationController.addSpecialization);

specializationRoutes
  .route("/specialization/:id")
  .patch(specializationController.updateSpecialization)
  .delete(specializationController.deleteSpecialization)
  .get(specializationController.singleSpecialization);
module.exports = specializationRoutes;
