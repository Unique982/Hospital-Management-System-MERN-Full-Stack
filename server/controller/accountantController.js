const { accountants, users } = require("../database/connection");
exports.getAccountant = async (req, res, next) => {
  try {
    const accountantDatas = await accountants.findAll(); // all data stored accountantDatas
    res.json({ message: "Fetch successfully!", accountantDatas });
  } catch (err) {
    res.json({ message: "failed " });
  }
};
// add new accountant
exports.adAccountant = async (req, res, next) => {
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

    const newUser = await users.create({
      userName,
      email,
      password,
      role: "accountant",
    });
    await accountants.create({
      user_id: newUser.id,
      firstName,
      lastName,
      gender,
      qualification,
      phoneNumber,
      address,
    });
    res.json({ message: "insert successfully!" });
  } catch (err) {
    console.log(err.message);
    res.json({ message: "inssert failed" });
  }
};
// update code
exports.updateAccountant = async (req, res, next) => {
  try {
    const id = req.params.id;
    const accountant = await accountants.findByPk(id);
    if (!accountant) {
      res.json({ message: "Accountant id not found!" });
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
    // update for accountant table
    await accountants.update(
      {
        firstName,
        lastName,
        gender,
        qualification,
        phoneNumber,
        address,
      },
      {
        where: {
          id: id,
        },
      }
    );
    // update for users table
    await users.update(
      {
        userName,
        email,
      },
      {
        where: {
          id: accountant.user_id,
        },
      }
    );
    res.json({ message: "Update successfully" });
  } catch (err) {
    console.log(err);
    res.json({ message: "Update failed" });
  }
};
// delete Accountant
exports.deleteAccountant = async (req, res, next) => {
  try {
    const id = req.params.id;
    const accountant = await accountants.findByPk(id);
    if (!accountant) {
      res.json({ message: "Delete successfully!" });
    }
    await accountants.destroy({
      where: {
        id: id,
      },
    });
    await users.destroy({
      where: {
        id: accountant.user_id,
      },
    });
    res.json({ message: "Delete successfully" });
  } catch (err) {
    res.json({ message: "delete failed!" });
  }
};
// single accountant data fatch
exports.singleAccountant = async (req, res, next) => {
  const id = req.params.id;
  const accountant = await accountants.findByPk(id);
  if (!accountant) {
    res.json({ message: "accountant id not fount" });
  }
  res.json({
    message: "Sigle fetch successfully !",
    accountantDatas: accountant,
  });
};
