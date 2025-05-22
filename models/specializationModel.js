const { Model, DataTypes } = require("sequelize");

// Specialization Model code here
const SpecializationModel = (sequelize, DataTypes) => {
  const Specialization = sequelize.define("specialization", {
    specialization: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    symptoms: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Specialization;
};
module.exports = SpecializationModel;
