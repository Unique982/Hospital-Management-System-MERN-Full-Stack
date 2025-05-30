const accountantRoutes = require("express").Router();
const accountantController = require("../controller/accountantController");

accountantRoutes
  .route("/accountant")
  .get(accountantController.getAccountant)
  .post(accountantController.adAccountant);
accountantRoutes
  .route("/accountant/:id")
  .patch(accountantController.updateAccountant)
  .delete(accountantController.deleteAccountant)
  .get(accountantController.singleAccountant);
module.exports = accountantRoutes;
