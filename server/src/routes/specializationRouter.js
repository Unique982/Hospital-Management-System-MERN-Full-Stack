const specializationRoutes = require("express").Router();
const specializationController = require("../controller/specializationController");
const asyncErrorHandle = require("../services/asyncErrorHandle");

specializationRoutes
  .route("/specialization")
  .get(asyncErrorHandle(specializationController.getSpecialization))
  .post(asyncErrorHandle(specializationController.addSpecialization));

specializationRoutes
  .route("/specialization/:id")
  .patch(asyncErrorHandle(specializationController.updateSpecialization))
  .delete(asyncErrorHandle(specializationController.deleteSpecialization))
  .get(asyncErrorHandle(specializationController.singleSpecialization));
module.exports = specializationRoutes;
