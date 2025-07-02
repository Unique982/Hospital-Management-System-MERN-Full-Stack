const accountantRoutes = require("express").Router();
const accountantController = require("../controller/accountantController");
const asyncErrorHandle = require("../services/asyncErrorHandle");
const isLoggedIn = require("../middleware/middleware");

accountantRoutes
  .route("/accountant")
  .get(isLoggedIn, asyncErrorHandle(accountantController.getAccountant))
  .post(isLoggedIn, asyncErrorHandle(accountantController.adAccountant));
accountantRoutes
  .route("/accountant/:id")
  .patch(isLoggedIn, asyncErrorHandle(accountantController.updateAccountant))
  .delete(isLoggedIn, asyncErrorHandle(accountantController.deleteAccountant))
  .get(isLoggedIn, asyncErrorHandle(accountantController.singleAccountant));
module.exports = accountantRoutes;
