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

// object create db for database
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
// user table import
db.users = require("../models/userModel")(sequelize, DataTypes);
// patient table import
db.patients = require("../models/patientModel")(sequelize, DataTypes);
// doctor model import
db.doctors = require("../models/doctorModel")(sequelize, DataTypes);
// nurse table import
db.nurses = require("../models/nurseModel")(sequelize, DataTypes);
// Pharamacist model import
db.pharmacists = require("../models/pharmacistModel")(sequelize, DataTypes);
// accountant model import
db.accountants = require("../models/accountantModel")(sequelize, DataTypes);
// lab_technician model import
db.lab_technicians = require("../models/lab_TechnicinaModel")(
  sequelize,
  DataTypes
);
// specialization table import
db.specializations = require("../models/specializationModel")(
  sequelize,
  DataTypes
);
// beds table import
db.beds = require("../models/bedModel")(sequelize, DataTypes);
// allocated bed table import
db.allocateds = require("../models/bedAllcateModel")(sequelize, DataTypes);
// bloodDonor table
db.bloodDonrs = require("../models/bloodDonorModel")(sequelize, DataTypes);
// appointment table
db.appointments = require("../models/appointmentsModel")(sequelize, DataTypes);
// report table
db.reports = require("../models/reportModel")(sequelize, DataTypes);

// migrate code
sequelize.sync({ alter: false }).then(() => {
  console.log("Migrate Successfully");
  const adminSeeder = require("../seeders/admin.seeder");
  adminSeeder(db);
});

module.exports = db;
