// Patient Controller code here
const { users, patients } = require("../database/connection");

exports.getPatientData = async (req, res, next) => {
  const datas = await patients.findAll();
  res.json({ message: "Patient Record fetch successfully ", datas });
};

// post patient data
exports.addPatientData = async (req, res, next) => {
  try {
    const {
      userName,
      email,
      password,
      firstName,
      lastName,
      address,
      age,
      phoneNumber,
    } = req.body;

    // user table insert
    const newUser = await users.create({
      userName,
      email,
      role: "patient",
      password,
    });
    // patient table insert
    await patients.create({
      user_id: newUser.id,
      firstName,
      lastName,
      address,
      age,
      phoneNumber,
    });
    res.json({ message: "Added New Patient Succssfully" });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "insert failed " });
  }
};

// Update code
exports.updatePatient = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { userName, email, firstName, lastName, address, age, phoneNumber } =
      req.body;
    const patient = await patients.findByPk(id);
    if (!patient) {
      res.json({ message: "Patient id not found" });
    }
    await patients.update(
      { firstName, lastName, address, age, phoneNumber },
      {
        where: {
          id: id,
        },
      }
    );
    // User table ma username rw email filed haru update hunxa
    await users.update(
      { userName, email },
      {
        where: {
          id: patient.user_id,
        },
      }
    );
    res.status(200).json({ message: "Update Successfully" });
  } catch (err) {
    console.log("error Update", err);
  }
};

// patient Delete code here
exports.deletePatient = async (req, res, next) => {
  try {
    const id = req.params.id;
    const patient = await patients.findByPk(id);
    if (!patient) {
      res.json({ message: "Patient id not found" });
    }
    await patients.destroy({
      where: {
        id: id,
      },
    });
    await users.destroy({
      where: {
        id: patient.user_id,
      },
    });
    res.status(200).json({ message: "Delete patient record successfully" });
  } catch (err) {
    console.log("Delete Error", err);
    res.json({ message: "Delete Error" });
  }
};

// Single Data Fetch Patient
exports.singlepatient = async (req, res, next) => {
  try {
    const id = req.params.id;
    const datas = await patients.findByPk(id);
    res.json({ message: "Single data fetch successfully", datas });
  } catch (err) {
    res.status(500).json({ message: "Error single record fetch" });
  }
};
