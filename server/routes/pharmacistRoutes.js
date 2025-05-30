const pharamacistRoutes = require("express").Router();
const pharamacistController = require("../controller/pharmacistController");

pharamacistRoutes
  .route("/pharmacist")
  .get(pharamacistController.getPharmacist)
  .post(pharamacistController.addPharamacists);

pharamacistRoutes
  .route("/pharmacist/:id")
  .patch(pharamacistController.updatePharmacists)
  .delete(pharamacistController.deletePharmacists);
module.exports = pharamacistRoutes;
