const { beds } = require("../database/connection");

// get all bed data fetch
exports.getBedFetch = async (req, res, next) => {
  try {
    const bedDatas = await beds.findAll();
    res.json({ message: "all bed record fetch successfully!", bedDatas });
  } catch (err) {
    res.json({ message: "error bed record fetch!" });
  }
};

// added new bed data
exports.addBed = async (req, res, next) => {
  try {
    const { bedNumber, bedType, description, status } = req.body;
    await beds.create({
      bedNumber,
      bedType,
      description,
      status,
    });
    res.json({ message: "Added Successfully!" });
  } catch (err) {
    res.json({ message: "added failed !" });
  }
};
// update bed data
exports.updateBed = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { bedNumber, bedType, description, status } = req.body;
    await beds.update(
      { bedNumber, bedType, description, status },
      {
        where: {
          id: id,
        },
      }
    );
    res.json({ message: "Update successfully!" });
  } catch (err) {
    res.json({ message: "Update failed!" });
  }
};

// delete bed
exports.deleteBed = async (req, res, next) => {
  try {
    const id = req.params.id;
    await beds.destroy({
      where: {
        id,
      },
    });
    res.json({ message: "Delete Successfully!" });
  } catch (err) {
    res.json({ message: "Delete Failed" });
  }
};

// single bed display
exports.singleBed = async (req, res, next) => {
  try {
    const id = req.params.id;
    const bedDatas = await beds.findByPk(id);
    res.json({ message: "single data successfully!", bedDatas });
  } catch (err) {
    res.json({ message: "Error" });
  }
};
