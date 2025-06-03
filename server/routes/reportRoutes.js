const reportRoutes = require("express").Router();
const reportController = require("../controller/reportController");
reportRoutes
  .route("/report")
  .get(reportController.getAllReport)
  .post(reportController.addReport);
reportRoutes
  .route("/report/:id")
  .patch(reportController.updateReport)
  .delete(reportController.deleteReport)
  .get(reportController.singleReport);
module.exports = reportRoutes;
