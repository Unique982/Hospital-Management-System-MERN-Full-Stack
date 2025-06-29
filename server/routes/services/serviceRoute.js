const servicesRouter = require("express").Router();
const servicesController = require("../../controller/admin/services/servicesController");
servicesRouter
  .route("/services")
  .post(servicesController.addService)
  .get(servicesController.getService);

servicesRouter
  .route("/services/:id")
  .patch(servicesController.updateService)
  .delete(servicesController.deleteService)
  .get(servicesController.singleService);
module.exports = servicesRouter;
