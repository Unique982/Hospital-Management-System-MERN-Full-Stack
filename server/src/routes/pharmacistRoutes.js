const pharamacistRoutes = require("express").Router();
const pharamacistController = require("../controller/pharmacistController");
const asyncErrorHandle = require("../services/asyncErrorHandle");

pharamacistRoutes
  .route("/pharmacist")
  .get(asyncErrorHandle(pharamacistController.getPharmacist))
  .post(asyncErrorHandle(pharamacistController.addPharamacists));

pharamacistRoutes
  .route("/pharmacist/:id")
  .patch(asyncErrorHandle(pharamacistController.updatePharmacists))
  .delete(asyncErrorHandle(pharamacistController.deletePharmacists));
module.exports = pharamacistRoutes;
