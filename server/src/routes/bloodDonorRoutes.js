const bloodDonorRoutes = require("express").Router();
const bloodDonorController = require("../controller/bloodDonorController");
const asyncErrorHandle = require("../services/asyncErrorHandle");
bloodDonorRoutes
  .route("/blood-donor")
  .get(asyncErrorHandle(bloodDonorController.getBloodDonorData))
  .post(asyncErrorHandle(bloodDonorController.addBloodDonor));
bloodDonorRoutes
  .route("/blood-donor/:id")
  .patch(asyncErrorHandle(bloodDonorController.updateBloodDonor))
  .delete(asyncErrorHandle(bloodDonorController.deleteBloodDonor))
  .get(asyncErrorHandle(bloodDonorController.singleBloodDonor));
module.exports = bloodDonorRoutes;
