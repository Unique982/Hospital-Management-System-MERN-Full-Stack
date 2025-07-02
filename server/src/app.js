// import express
const express = require("express");
// database conection file import
const db = require("./database/connection");
// dot env (Enviroment File)
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// import Routes
const authRoutes = require("./routes/authRoutes");
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
const appointmentRoutes = require("./routes/appointmentRoutes");
const reportRoutes = require("./routes/reportRoutes");
const aboutRoutes = require("./routes/about/aboutRoute");
const servicesRoutes = require("./routes/services/serviceRoute");
const ourTeamsRoutes = require("./routes/ourTeams/ourTeamsRoute");
const blogRoutes = require("./routes/blog/blogRoute");
const contactUsRoutes = require("./routes/contactus/contactUsRoute");

// patient realted route
const patientdoctorRoutes = require("./routes/patient/doctor/doctorViewRoute");
const patientAppointmentRoutes = require("./routes/patient/appointment/appointmenRoute");

app.use("/api", authRoutes);
app.use("/api/admin", patientRoutes);
app.use("/api/admin", doctorRoutes);
app.use("/api/admin", nurseRoutes);
app.use("/api/admin", pharamacistRoutes);
app.use("/api/admin", accountantRoutes);
app.use("/api/admin", lab_technicianRoutes);
app.use("/api/admin", specializationRoutes);
app.use("/api/admin", bedRouter);
app.use("/api/admion", bedAllocatedRouter);
app.use("/api/admin", bloodDonorRouter);
app.use("/api/admin", appointmentRoutes);
app.use("/api/admin", reportRoutes);
app.use("/api/admin", aboutRoutes);
app.use("/api/admin", servicesRoutes);
app.use("/api/admin", ourTeamsRoutes);
app.use("/api/admin", blogRoutes);
app.use("/api/admin", contactUsRoutes);

// patient related api
app.use("/api/patient/doctor", patientdoctorRoutes);
app.use("/api/patient/appointment", patientAppointmentRoutes);

module.exports = app;
