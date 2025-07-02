const { DataTypes } = require("sequelize");

const servicesModel = (sequelize, DataTypes) => {
  const Services = sequelize.define("service", {
    serviceTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    serviceDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    serviceIcon: {
      type: DataTypes.STRING,
      allowNullL: false,
    },
  });
  return Services;
};
module.exports = servicesModel;
