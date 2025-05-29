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
const nurseRoutes = require("./routes/nurseRoutes");
const pharamacistRoutes = require("./routes/pharmacistRoutes");
const accountantRoutes = require("./routes/accountantRoutes");
const lab_technicianRoutes = require("./routes/lab_technicianRoutes");
const specializationRoutes = require("./routes/specializationRouter");
const bedRouter = require("./routes/bedRoutes");
const bedAllocatedRouter = require("./routes/bedAllocatedRoutes");
const bloodDonorRouter = require("./routes/bloodDonorRoutes");

app.use("/api", patientRoutes);
app.use("/api", doctorRoutes);
app.use("/api", nurseRoutes);
app.use("/api", pharamacistRoutes);
app.use("/api", accountantRoutes);
app.use("/api", lab_technicianRoutes);
app.use("/api", specializationRoutes);
app.use("/api", bedRouter);
app.use("/api", bedAllocatedRouter);
app.use("/api", bloodDonorRouter);

// create server
app.listen(5000, () => {
  console.log(`server running on http://localhost:5000`);
});
