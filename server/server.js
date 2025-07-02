require("dotenv").config();
const app = require("./src/app");
// import database connection file
const db = require("./src/database/connection");
// create server
function serverStart() {
  const port = process.env.PORT;
  app.listen(port, function () {
    console.log(`Server has started running ${port}`);
  });
}
serverStart();
