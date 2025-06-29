const aboutRouter = require("express").Router();
const aboutController = require("../../controller/admin/about/aboutController");

aboutRouter
  .route("/about")
  .post(aboutController.createAbout)
  .get(aboutController.getAbout);
module.exports = aboutRouter;
