const patientModel = (sequelize, DataTypes) => {
  const Patient = sequelize.define("patient", {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Patient.associate = (models) => {
    Patient.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
    });
  };
  return Patient;
};
module.exports = patientModel;
