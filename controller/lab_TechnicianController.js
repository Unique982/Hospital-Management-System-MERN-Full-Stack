const { lab_technicians, users } = require("../database/connection");
// all data fetch
exports.getLabTechnician = async (req, res, next) => {
  try {
    const datas = await lab_technicians.findAll();
    res.json({ message: "Lab technician data fetch successfully", datas });
  } catch (err) {
    res.json({ message: "Error fetch data" });
  }
};

// add new lab_technicians
exports.addLabTechnician = async (req, res, next) => {
  try {
    const {
      userName,
      email,
      password,
      firstName,
      lastName,
      address,
      gender,
      phoneNumber,
      qualification,
    } = req.body;
    // user table insert data
    const newUser = await users.create({
      userName,
      email,
      password,
      role: "lab_technician",
    });
    // lab_technician table insert new data
    await lab_technicians.create({
      user_id: newUser.id,
      firstName,
      lastName,
      address,
      gender,
      phoneNumber,
      qualification,
    });
    res.json({ message: "insert new data successfully!" });
  } catch (err) {
    console.log(err.message);
    res.json({ message: "insert error" });
  }
};

//update lab_technician
exports.updateLabTechnician = async (req, res, next) => {
  try {
    const id = req.params.id;
    const labTechnician = await lab_technicians.findByPk(id);
    if (!labTechnician) {
      res.json({ message: "labTechnician id not found" });
    }
    const {
      userName,
      email,
      firstName,
      lastName,
      address,
      gender,
      phoneNumber,
      qualification,
    } = req.body;
    // update labtechnician
    await lab_technicians.update(
      {
        firstName,
        lastName,
        address,
        gender,
        phoneNumber,
        qualification,
      },
      {
        where: {
          id: id,
        },
      }
    );
    // update users table
    await users.update(
      { userName, email },
      { where: { id: labTechnician.user_id } }
    );
    res.json({ message: "Update data successfully!" });
  } catch (err) {
    res.json({ message: "update error" });
  }
};

// delete labTechnician data
exports.deleteLabTechnician = async (req, res, next) => {
  try {
    const id = req.params.id;
    const labTechnicina = await lab_technicians.findByPk(id);
    if (!labTechnicina) {
      res.json({ message: "lab technicina id not found" });
    }
    await lab_technicians.destroy({
      where: {
        id: id,
      },
    });
    await users.destroy({
      where: {
        id: labTechnicina.user_id,
      },
    });
    res.json({ message: "Delete successfully!" });
  } catch (err) {
    res.json({ message: "Delete error" });
  }
};

// single datafetch
exports.singleLabtechnicianData = async (req, res, next) => {
  try {
    const id = req.params.id;
    const labTechnician = await lab_technicians.findByPk(id);
    if (!labTechnician) {
      res.json({ message: "lab technician id not found" });
    }
    res.json({
      message: "Single data fetch successfully!",
      datas: labTechnician,
    });
  } catch (err) {
    res.json({ message: "Error" });
  }
};
