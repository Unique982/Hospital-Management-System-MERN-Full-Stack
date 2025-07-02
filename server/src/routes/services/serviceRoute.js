const servicesRouter = require("express").Router();
const servicesController = require("../../controller/admin/services/servicesController");
const asyncErrorHandle = require("../../services/asyncErrorHandle");
const isLoggedIn = require("../../middleware/middleware");
servicesRouter
  .route("/services")
  .post(isLoggedIn, asyncErrorHandle(servicesController.addService))
  .get(asyncErrorHandle(servicesController.getService));

servicesRouter
  .route("/services/:id")
  .patch(isLoggedIn, asyncErrorHandle(servicesController.updateService))
  .delete(isLoggedIn, asyncErrorHandle(servicesController.deleteService))
  .get(asyncErrorHandle(servicesController.singleService));
module.exports = servicesRouter;
