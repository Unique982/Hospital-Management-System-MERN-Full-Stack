const { bloodDonrs } = require("../database/connection");

exports.getBloodDonorData = async (req, res, next) => {
  try {
    const donnorsdata = await bloodDonrs.findAll();
    res.json({
      message: "all bloodDonor data fetch successfully!",
      donnorsdata,
    });
  } catch (err) {
    res.json({ message: "Donor data fetch err" });
  }
};

// add new bloodDonor
exports.addBloodDonor = async (req, res, next) => {
  try {
    const {
      name,
      email,
      phone,
      age,
      gender,
      bloodGroup,
      lastDonated,
      isAvailable,
    } = req.body;
    if (
      !name ||
      !email ||
      !phone ||
      !age ||
      !gender ||
      !bloodGroup ||
      !lastDonated ||
      !isAvailable
    ) {
      res.json({ message: "all filed is required" });
    }
    await bloodDonrs.create({
      name,
      email,
      phone,
      age,
      gender,
      bloodGroup,
      lastDonated,
      isAvailable,
    });
    res.json({ message: "Create successfully" });
  } catch (err) {
    console.log(err.message);
    res.json({ message: "created eror" });
  }
};

// update bloodDonor
exports.updateBloodDonor = async (req, res, next) => {
  try {
    const id = req.params.id;
    const {
      name,
      email,
      phone,
      age,
      gender,
      bloodGroup,
      lastDonated,
      isAvailable,
    } = req.body;
    if (
      !name ||
      !email ||
      !phone ||
      !age ||
      !gender ||
      !bloodGroup ||
      !lastDonated ||
      !isAvailable
    ) {
      res.json({ message: "all filed is required" });
    }
    await bloodDonrs.update(
      {
        name,
        email,
        phone,
        age,
        gender,
        bloodGroup,
        lastDonated,
        isAvailable,
      },
      { where: { id } }
    );
    res.json({ message: "Update successfully!" });
  } catch (err) {
    console.log(err.message);
    res.json({ message: "Update Error" });
  }
};
// delete bloodDonor
exports.deleteBloodDonor = async (req, res, next) => {
  try {
    const id = req.params.id;
    await bloodDonrs.destroy({ where: { id } });
    res.json({ message: "Delete Successfully!" });
  } catch (err) {
    console.log(err.message);
    res.json({ message: "Delete error" });
  }
};

// single data fetch
exports.singleBloodDonor = async (req, res, next) => {
  try {
    const id = req.params.id;
    const singleData = await bloodDonrs.findByPk(id);
    res.json({ message: "Single data fetch successfully!", singleData });
  } catch (err) {
    res.json({ message: "Single data fetch error" });
  }
};
