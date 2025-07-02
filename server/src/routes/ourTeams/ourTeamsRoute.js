const ourTeamsRouter = require("express").Router();
const ourTeamsController = require("../../controller/admin/ourTeams/ourTeamsController");
const asyncErrorHandle = require("../../services/asyncErrorHandle");
const isLoggedIn = require("../../middleware/middleware");
ourTeamsRouter
  .route("/ourTeams")
  .post(isLoggedIn, asyncErrorHandle(ourTeamsController.createOurTeams))
  .get(asyncErrorHandle(ourTeamsController.getOurTeams));

ourTeamsRouter
  .route("/ourTeams/:id")
  .patch(isLoggedIn, asyncErrorHandle(ourTeamsController.updateOurTeams))
  .delete(isLoggedIn, asyncErrorHandle(ourTeamsController.deleteOurTeams))
  .get(asyncErrorHandle(ourTeamsController.singleOurTeam));

module.exports = ourTeamsRouter;
