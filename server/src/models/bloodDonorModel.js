const bloodDonorModel = (sequelize, DataTypes) => {
  const BloodDonor = sequelize.define("bloodDonors", {
    name: {
      type: DataTypes.STRING,
      allowsNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowsNull: false,
      unique: true,
    },
    age: {
      type: DataTypes.INTEGER,
      allowsNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowsNull: false,
      unique: true,
    },
    gender: {
      type: DataTypes.ENUM("male", "female", "other"),
      allowsNull: false,
    },
    bloodGroup: {
      type: DataTypes.STRING,
      allowsNull: false,
    },
    lastDonated: {
      type: DataTypes.DATE,
      allowsNull: false,
    },
    isAvailable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  });
  return BloodDonor;
};
module.exports = bloodDonorModel;
