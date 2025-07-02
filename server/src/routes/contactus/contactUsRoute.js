const contactUsRouter = require("express").Router();
const contactUsController = require("../../controller/admin/contactUs/contactUsController");
const asyncErrorHandle = require("../../services/asyncErrorHandle");
const isLoggedIn = require("../../middleware/middleware");
contactUsRouter
  .route("/contact")
  .post(asyncErrorHandle(contactUsController.createContactus))
  .get(isLoggedIn, asyncErrorHandle(contactUsController.getContactUs));

contactUsRouter
  .route("/contact/:id")
  .delete(isLoggedIn, asyncErrorHandle(contactUsController.deleteContactUs))
  .get(isLoggedIn, asyncErrorHandle(contactUsController.singleContactus));

module.exports = contactUsRouter;
