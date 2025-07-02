const bedAllocatedRouter = require("express").Router();
const bedAllocatedController = require("../controller/bedAllocatedController");
const asyncErrorHandle = require("../services/asyncErrorHandle");
bedAllocatedRouter
  .route("/bed-allocated")
  .get(asyncErrorHandle(bedAllocatedController.getBedAllocatedFetch))
  .post(asyncErrorHandle(bedAllocatedController.addBedAllocated));
bedAllocatedRouter
  .route("/bed-allocated/:id")
  .patch(asyncErrorHandle(bedAllocatedController.updateBedAllocated))
  .delete(asyncErrorHandle(bedAllocatedController.deleteBedAllocated))
  .get(asyncErrorHandle(bedAllocatedController.singleBedAllocated));
module.exports = bedAllocatedRouter;
