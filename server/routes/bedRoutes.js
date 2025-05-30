const bedRouter = require("express").Router();
const bedController = require("../controller/bedController");

bedRouter
  .route("/bed")
  .get(bedController.getBedFetch)
  .post(bedController.addBed);

bedRouter
  .route("/bed/:id")
  .patch(bedController.updateBed)
  .delete(bedController.deleteBed)
  .get(bedController.singleBed);

module.exports = bedRouter;
