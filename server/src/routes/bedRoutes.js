const bedRouter = require("express").Router();
const bedController = require("../controller/bedController");
const asyncErrorHandle = require("../services/asyncErrorHandle");

bedRouter
  .route("/bed")
  .get(asyncErrorHandle(bedController.getBedFetch))
  .post(asyncErrorHandle(bedController.addBed));

bedRouter
  .route("/bed/:id")
  .patch(asyncErrorHandle(bedController.updateBed))
  .delete(asyncErrorHandle(bedController.deleteBed))
  .get(asyncErrorHandle(bedController.singleBed));

module.exports = bedRouter;
