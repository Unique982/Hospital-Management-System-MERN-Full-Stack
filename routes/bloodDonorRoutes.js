const bloodDonorRoutes = require("express").Router();
const bloodDonorController = require("../controller/bloodDonorController");
bloodDonorRoutes
  .route("/blood-donor")
  .get(bloodDonorController.getBloodDonorData)
  .post(bloodDonorController.addBloodDonor);
bloodDonorRoutes
  .route("/blood-donor/:id")
  .patch(bloodDonorController.updateBloodDonor)
  .delete(bloodDonorController.deleteBloodDonor)
  .get(bloodDonorController.singleBloodDonor);
module.exports = bloodDonorRoutes;
