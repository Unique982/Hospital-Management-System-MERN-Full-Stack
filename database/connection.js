// databaase connection code
const { Sequelize, DataTypes } = require("sequelize");

// import dotenv (enviroment file )
const dotenv = require("dotenv").config();

const sequelize = new Sequelize(process.env.DATABASE_URL);

sequelize
  .authenticate()
  .then(() => {
    console.log("Authenticate vayo ,Connection vayo");
  })
  .catch((err) => {
    console.log("Error Aayo!", err);
  });

// object create db
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.patients = require("../models/patientModel")(sequelize, DataTypes);
db.specializations = require("../models/specializationModel")(
  sequelize,
  DataTypes
);
db.beds = require("../models/bedModel")(sequelize, DataTypes);

// migrate code
sequelize.sync({ alter: false }).then(() => {
  console.log("Migrate Successfully");
});

module.exports = db;
