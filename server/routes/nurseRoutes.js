const nurseRoutes = require("express").Router();
const nurseController = require("../controller/nurseController");
nurseRoutes
  .route("/nurse")
  .get(nurseController.getNurse)
  .post(nurseController.addNurse);
nurseRoutes
  .route("/nurse/:id")
  .patch(nurseController.updateNurse)
  .delete(nurseController.deleteNurse)
  .get(nurseController.singleNurse);

module.exports = nurseRoutes;
