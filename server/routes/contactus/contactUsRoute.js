const contactUsRouter = require("express").Router();
const contactUsController = require("../../controller/admin/contactUs/contactUsController");

contactUsRouter
  .route("/contact")
  .post(contactUsController.createContactus)
  .get(contactUsController.getContactUs);

contactUsRouter
  .route("/contact/:id")
  .delete(contactUsController.deleteContactUs)
  .get(contactUsController.singleContactus);

module.exports = contactUsRouter;
