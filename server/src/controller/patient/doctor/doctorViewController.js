const { doctors } = require("../../../database/connection");

exports.getDoctor = async (req, res) => {
  const doctorData = await doctors.findAll();
  res.status(200).json({ message: "doctor get!", data: doctorData });
};
