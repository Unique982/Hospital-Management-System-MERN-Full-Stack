const nurseRoutes = require("express").Router();
const nurseController = require("../controller/nurseController");
const asyncErrorHandle = require("../services/asyncErrorHandle");
nurseRoutes
  .route("/nurse")
  .get(asyncErrorHandle(nurseController.getNurse))
  .post(asyncErrorHandle(nurseController.addNurse));
nurseRoutes
  .route("/nurse/:id")
  .patch(asyncErrorHandle(nurseController.updateNurse))
  .delete(asyncErrorHandle(nurseController.deleteNurse))
  .get(asyncErrorHandle(nurseController.singleNurse));

module.exports = nurseRoutes;
