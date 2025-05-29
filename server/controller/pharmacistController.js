const { pharmacists, users } = require("../database/connection");
exports.getPharmacist = async (req, res, next) => {
  try {
    const pharamacistsDatas = await pharmacists.findAll();
    res.json({
      message: "Pharamacists data fetch all successfully!",
      pharamacistsDatas,
    });
  } catch (err) {
    res.json({ message: "Error" });
  }
};

// add pharamacists
exports.addPharamacists = async (req, res, next) => {
  try {
    const {
      userName,
      email,
      password,
      firstName,
      lastName,
      address,
      phoneNumber,
      gender,
      qualification,
    } = req.body;
    // user table  insert
    const newUser = await users.create({
      userName,
      email,
      password,
      role: "pharmacist",
    });
    // pharamacists table insert
    await pharmacists.create({
      user_id: newUser.id,
      firstName,
      lastName,
      address,
      phoneNumber,
      gender,
      qualification,
    });
    res.json({ message: "insert successfully!" });
  } catch (err) {
    res.json({ message: "Insert failed" });
    console.log(err.message);
  }
};

// update pharmacists
exports.updatePharmacists = async (req, res, next) => {
  try {
    const id = req.params.id;
    const pharmacist = await pharmacists.findByPk(id);
    if (!pharmacist) {
      res.json({ message: "pharmacists id not found" });
    }
    const {
      userName,
      email,
      firstName,
      lastName,
      address,
      phoneNumber,
      gender,
      qualification,
    } = req.body;
    // pharmacists table update
    await pharmacists.update(
      {
        firstName,
        lastName,
        address,
        phoneNumber,
        gender,
        qualification,
      },
      {
        where: {
          id: id,
        },
      }
    );
    // user table update
    await users.update(
      { userName, email },
      {
        where: {
          id: pharmacist.user_id,
        },
      }
    );
    res.json({ message: "update successfully" });
  } catch (err) {
    res.json({ message: "Update faileds" });
  }
};

// delete pharmacists
exports.deletePharmacists = async (req, res, next) => {
  try {
    const id = req.params.id;
    const pharmacist = await pharmacists.findByPk(id);
    if (!pharmacist) {
      res.josn({ message: "pharmacist id not found" });
    }
    await pharmacists.destroy({
      where: {
        id: id,
      },
    });
    // user tabel delete
    await users.destroy({
      where: {
        id: pharmacist.user_id,
      },
    });
    res.json({ message: "Delete successfully !" });
  } catch (err) {
    res.json({ message: "delete failed" });
  }
};
