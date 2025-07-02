// specialization Controller code here

const { specializations } = require("../database/connection");
// fetch all data
exports.getSpecialization = async (req, res, next) => {
  try {
    const spDatas = await specializations.findAll();
    res.json({ message: "Specialization record fetch all!", spDatas });
  } catch (err) {
    res.json({ message: "Error fetch" });
  }
};
// add specialization
exports.addSpecialization = async (req, res, next) => {
  try {
    const { specialization, description, symptoms } = req.body;
    await specializations.create({
      specialization,
      description,
      symptoms,
    });
    res.json({ message: "Added Successfully!" });
  } catch (err) {
    res.json({ message: "insert Error!" });
  }
};

// udpate specialization
exports.updateSpecialization = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { specialization, description, symptoms } = req.body;

    await specializations.update(
      {
        specialization,
        description,
        symptoms,
      },
      {
        where: {
          id,
        },
      }
    );
    res.json({ message: "Update data successfully!" });
  } catch (err) {
    res.json({ message: "error update!" });
  }
};

// delete specialization
exports.deleteSpecialization = async (req, res, next) => {
  try {
    const id = req.params.id;
    await specializations.destroy({
      where: {
        id,
      },
    });
    res.json({ message: "Specialization Delete Successfully!" });
  } catch (err) {
    res.json({ message: "Specialization Delete Erro!" });
  }
};
// single specialization
exports.singleSpecialization = async (req, res, next) => {
  try {
    const id = req.params.id;
    const spDatas = await specializations.findByPk(id);
    res.json({ message: "singel data fetch successfully", spDatas });
  } catch (err) {
    res.json({ message: "single fetch error" });
  }
};
