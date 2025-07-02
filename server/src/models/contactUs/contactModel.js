const contactUsModel = (sequelize, DataTypes) => {
  const ContactUs = sequelize.define("conatctUs", {
    contactName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contactEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return ContactUs;
};
module.exports = contactUsModel;
