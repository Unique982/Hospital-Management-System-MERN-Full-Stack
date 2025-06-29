const { sequelize, about } = require("../../../database/connection");

exports.createAbout = async (req, res) => {
  const { aboutTitle, aboutDescription } = req.body;
  const aboutImage = "unique.pnng";
  if (!aboutTitle || !aboutDescription) {
    return res.status(400).json({ message: "All fields are required!" });
  }
  await about.create({ aboutTitle, aboutDescription, aboutImage });
  res.status(200).json({ message: "About create successfully!" });
};
exports.getAbout = async (req, res) => {
  const abouts = await about.findAll();
  res.status(200).json({ message: "About fetch", data: abouts });
};
