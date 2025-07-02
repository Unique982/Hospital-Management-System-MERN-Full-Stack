const reportRoutes = require("express").Router();
const reportController = require("../controller/reportController");
const asyncErrorHandle = require("../services/asyncErrorHandle");
reportRoutes
  .route("/report")
  .get(asyncErrorHandle(reportController.getAllReport))
  .post(asyncErrorHandle(reportController.addReport));
reportRoutes
  .route("/report/:id")
  .patch(asyncErrorHandle(reportController.updateReport))
  .delete(asyncErrorHandle(reportController.deleteReport))
  .get(asyncErrorHandle(reportController.singleReport));
module.exports = reportRoutes;
