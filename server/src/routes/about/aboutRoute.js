const aboutRouter = require("express").Router();
const aboutController = require("../../controller/admin/about/aboutController");
const asyncErrorHandle = require("../../services/asyncErrorHandle");
const { upload } = require("../../middleware/multerMiddleware");
const isLoggedIn = require("../../middleware/middleware");

aboutRouter
  .route("/about")
  .post(
    isLoggedIn,
    upload.single("aboutImage"),
    asyncErrorHandle(aboutController.createAbout)
  )
  .get(isLoggedIn, asyncErrorHandle(aboutController.getAbout));
module.exports = aboutRouter;
