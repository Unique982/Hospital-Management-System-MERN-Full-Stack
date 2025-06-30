const ourTeamsRouter = require("express").Router();
const ourTeamsController = require("../../controller/admin/ourTeams/ourTeamsController");

ourTeamsRouter
  .route("/ourTeams")
  .post(ourTeamsController.createOurTeams)
  .get(ourTeamsController.getOurTeams);

ourTeamsRouter
  .route("/ourTeams/:id")
  .patch(ourTeamsController.updateOurTeams)
  .delete(ourTeamsController.deleteOurTeams)
  .get(ourTeamsController.singleOurTeam);

module.exports = ourTeamsRouter;
