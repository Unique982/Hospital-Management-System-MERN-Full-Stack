// import express
const express = require("express");
// database conection file import
const db = require("./database/connection");
// dot env (Enviroment File)
const dotenv = require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// import Routes
const patientRoutes = require("./routes/patientRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const specializationRoutes = require("./routes/specializationRouter");
const bedRouter = require("./routes/bedRoutes");

app.use("", patientRoutes);
app.use("", doctorRoutes);
app.use("", specializationRoutes);
app.use("", bedRouter);

// create server
app.listen(5000, () => {
  console.log(`server running on http://localhost:5000`);
});
