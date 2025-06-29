const { sequelize } = require("../database/connection");

const aboutModel = (sequelize, DataTypes) => {
  const About = sequelize.define("about", {
    aboutTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    aboutDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    aboutImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return About;
};
module.exports = aboutModel;
