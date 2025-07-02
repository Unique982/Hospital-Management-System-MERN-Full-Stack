const { nurses, users } = require("../database/connection");
const bcrypt = require("bcryptjs");
exports.getNurse = async (req, res, next) => {
  try {
    const nurseDatas = await nurses.findAll();
    res.json({ message: "Nurse data fetch successfully!", nurseDatas });
  } catch (err) {
    res.json({ message: " error fetch data" });
    console.log(err);
  }
};
// add new nurse
exports.addNurse = async (req, res, next) => {
  try {
    const {
      userName,
      email,
      password,
      firstName,
      lastName,
      gender,
      qualification,
      phoneNumber,
      address,
    } = req.body;
    if (
      !userName ||
      !email ||
      !password ||
      !firstName ||
      !lastName ||
      !gender ||
      !qualification ||
      !phoneNumber ||
      !address
    ) {
      return res.json({ message: "All filed is require" });
    }
    const newUser = await users.create({
      userName,
      email,
      password: bcrypt.hashSync(password, 12),
      role: "nurse",
    });
    await nurses.create({
      user_id: newUser.id,
      firstName,
      lastName,
      gender,
      qualification,
      phoneNumber,
      address,
    });
    res.json({ message: "new nurse add successfully!" });
  } catch (err) {
    res.json({ message: "insert failed" });
    console.log(err);
  }
};

// update Nurse data
exports.updateNurse = async (req, res, next) => {
  try {
    const id = req.params.id;
    const nurse = await nurses.findByPk(id);
    if (!nurse) {
      res.json({ message: "nurse id not found " });
    }
    const {
      userName,
      email,
      firstName,
      lastName,
      gender,
      qualification,
      phoneNumber,
      address,
    } = req.body;
    if (
      !userName ||
      !email ||
      !password ||
      !firstName ||
      !lastName ||
      !gender ||
      !qualification ||
      !phoneNumber ||
      !address
    ) {
      return res.json({ message: "All filed is require" });
    }
    // update user table username and email
    await nurses.update(
      { firstName, lastName, gender, qualification, phoneNumber, address },
      {
        where: {
          id: id,
        },
      }
    );
    await users.update(
      {
        userName,
        email,
      },
      {
        where: {
          id: nurse.user_id,
        },
      }
    );
    res.json({ message: "Nurse data update successfully" });
  } catch (err) {
    res.json({ message: "Update error" });
    console.log(err.message);
  }
};

// delete nurse data
exports.deleteNurse = async (req, res, next) => {
  try {
    const id = req.params.id;
    const nurse = await nurses.findByPk(id);
    if (!nurse) {
      res.json({ message: "Nurse id not found" });
    }
    // delete nurse table
    await nurses.destroy({
      where: {
        id: id,
      },
    });
    // user table delete only same nurse record
    await users.destroy({
      where: {
        id: nurse.user_id,
      },
    });
    res.json({ messgae: "Nurse data delete successfully!" });
  } catch (err) {
    res.json({ message: "Delete Failed" });
    console.log(err.message);
  }
};
// single nurse fetch
exports.singleNurse = async (req, res, next) => {
  try {
    const id = req.params.id;
    const nurse = await nurses.findByPk(id);
    if (!nurse) {
      res.json({ message: "nurse id not found" });
    }
    res.json({ message: "single data fetch successfully", data: nurse });
  } catch (err) {
    res.json({ message: "failed", err });
    console.log(err.message);
  }
};
