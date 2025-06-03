const { reports } = require("../database/connection");

exports.getAllReport = async (req, res, next) => {
  try {
    const allReports = await reports.findAll();
    res.json({ message: "All data fetch successfully!", allReports });
  } catch (err) {
    console.log(err);
    res.json({ message: "Error all data fetch" });
  }
};

// add new report
exports.addReport = async (req, res, next) => {
  try {
    const { patient_id, doctor_id, reportType, description, date } = req.body;
    await reports.create({
      patient_id,
      doctor_id,
      reportType,
      description,
      date,
    });
    res.json({ message: "Added successfully" });
  } catch (err) {
    res.json({ message: "error added" });
  }
};

// update reports
exports.updateReport = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { patient_id, doctor_id, reportType, description, date } = req.body;
    await reports.update(
      {
        patient_id,
        doctor_id,
        reportType,
        description,
        date,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.json({ message: "Update Successfully" });
  } catch (err) {
    console.log(err);
    res.json({ message: "Update errro" });
  }
};

// delete report
exports.deleteReport = async (req, res, next) => {
  try {
    const id = req.params.id;
    await reports.destroy({
      where: {
        id: id,
      },
    });
    res.json({ message: "Delete Successfully!" });
  } catch (err) {
    console.log(err);
    res.json({ message: "delete error" });
  }
};

// single report display
exports.singleReport = async (req, res, next) => {
  try {
    const id = req.params.id;
    const singleReport = await reports.findByPk(id);
    res.json({ message: "single data fetch successfully!", singleReport });
  } catch (err) {
    res.json({ message: "singel data fetch errror" });
  }
};
