const { doctors, specializations, users } = require("../database/connection");

exports.getDoctor = async (req, res, next) => {
  const doctorDatas = await doctors.findAll();
  res.json({ message: "fetch all doctor record", doctorDatas });
};
exports.addDoctor = async (req, res, next) => {
  try {
    const {
      userName,
      email,
      password,
      firstName,
      lastName,
      specialization,
      gender,
      address,
      qualification,
      phoneNumber,
    } = req.body;

    // user table insert 1st
    const newUser = await users.create({
      userName,
      email,
      role: "doctor",
      password,
    });
    await doctors.create({
      user_id: newUser.id,
      firstName,
      lastName,
      specialization,
      gender,
      address,
      qualification,
      phoneNumber,
    });
    res.json({ message: "new doctor add successfully!" });
  } catch (err) {
    res.json({ message: "Insert failed!" });
  }
};

// update doctor
exports.updateDoctor = async (req, res, next) => {
  try {
    const id = req.params.id;
    const doctor = await doctors.findByPk(id);
    if (!doctor) {
      res.json({ message: "Doctor id not fount" });
    }
    const {
      userName,
      email,
      firstName,
      lastName,
      specialization,
      gender,
      address,
      qualification,
      phoneNumber,
    } = req.body;
    // doctor table ma update
    await doctors.update(
      {
        firstName,
        lastName,
        specialization,
        gender,
        address,
        qualification,
        phoneNumber,
      },
      {
        where: {
          id: id,
        },
      }
    );
    // user table data update
    await users.update(
      {
        userName,
        email,
      },
      {
        where: {
          id: doctor.user_id, // pk bat aako id ho kun doctor vanna name ma store gariya ko xa
        },
      }
    );
    res.json({ message: "Update doctor record successfully" });
  } catch (err) {
    res.json({ message: "Update Failed!" });
  }
};

// delete doctor
exports.deleteDoctor = async (req, res, next) => {
  try {
    const id = req.params.id;
    const doctor = await doctors.findByPk(id);
    if (!doctor) {
      res.json({ message: "Doctor id not found" });
    }
    // doctor table ko record delete
    await doctors.destroy({
      where: {
        id: id,
      },
    });
    // users table delete  doctor record
    await users.destroy({
      where: {
        id: doctor.user_id,
      },
    });

    res.json({ message: "Delete Successfully!" });
  } catch (err) {
    res.json({ message: "Delete failed", err });
  }
};

// Single Doctor record
exports.singleDoctor = async (req, res, next) => {
  try {
    const id = req.params.id;
    const doctor = await doctor.findByPk(id);
    if (!doctor) {
      res.json({ message: "doctor id not found" });
    }
    res.json({ message: "doctor fetch all successfully", doctor });
  } catch (err) {
    res.json({ message: "doctor fetch error" });
  }
};
