const bedAllocatedRouter = require("express").Router();
const bedAllocatedController = require("../controller/bedAllocatedController");
bedAllocatedRouter
  .route("/bed-allocated")
  .get(bedAllocatedController.getBedAllocatedFetch)
  .post(bedAllocatedController.addBedAllocated);
bedAllocatedRouter
  .route("/bed-allocated/:id")
  .patch(bedAllocatedController.updateBedAllocated)
  .delete(bedAllocatedController.deleteBedAllocated)
  .get(bedAllocatedController.singleBedAllocated);
module.exports = bedAllocatedRouter;
