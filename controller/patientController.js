// Patient Controller code here
const { patients } = require("../database/connection");

exports.getPatientData = async (req, res, next) => {
  const datas = await patients.findAll();
  res.json({ message: "Patient Record fetch successfully ", datas });
};

// post patient data
exports.addPatientData = async (req, res, next) => {
  try {
    const { userName, firstName, lastName, email, phoneNumber, password } =
      req.body;
    await patients.create({
      userName,
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
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
    const { userName, firstName, lastName, email, phoneNumber } = req.body;
    await patients.update(
      { userName, firstName, lastName, email, phoneNumber },
      {
        where: {
          id: id,
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
    await patients.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json({ message: "Delete patient record successfully" });
  } catch (err) {
    console.log("Delete Error", err);
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
