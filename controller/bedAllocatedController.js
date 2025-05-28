const { where } = require("sequelize");
const { allocateds } = require("../database/connection");
// all data fetch
exports.getBedAllocatedFetch = async (req, res, next) => {
  try {
    const alldats = await allocateds.findAll();
    res.json({ message: "fetch successfully!", alldats });
  } catch (err) {
    res.json({ message: "error fetch" });
  }
};

//add new data
exports.addBedAllocated = async (req, res, next) => {
  try {
    const { bed_id, patient_id, allocated_date, discharge } = req.body;
    await allocateds.create({
      bed_id,
      patient_id,
      allocated_date,
      discharge,
    });
    res.json({ message: "Create successfully!" });
  } catch (err) {
    console.log(err.message);
    res.json({ message: "Create error" });
  }
};

// update bedAllocated
exports.updateBedAllocated = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { bed_id, patient_id, allocated_date, discharge } = req.body;
    await allocateds.update(
      { bed_id, patient_id, allocated_date, discharge },
      {
        where: {
          id,
        },
      }
    );
    res.json({ message: "Update successfully" });
  } catch (err) {
    console.log(err.message);
    res.json({ message: "Update error" });
  }
};
// delete bedAllocated
exports.deleteBedAllocated = async (req, res, next) => {
  try {
    const id = req.params.id;
    await allocateds.destroy({
      where: {
        id,
      },
    });
    res.json({ message: "Delete Successfully" });
  } catch (err) {
    res.json({ message: "Delete Error" });
  }
};

// single data fetch
exports.singleBedAllocated = async (req, res, next) => {
  try {
    const id = req.params.id;
    const singleDatas = await allocateds.findByPk(id);
    res.json({ message: "Single data fetch successfully!", singleDatas });
  } catch (err) {
    res.json({ message: "Error Single data fetch" });
  }
};
