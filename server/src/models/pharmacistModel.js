const pharmacistModel = (sequelize, DataTypes) => {
  const Pharmacist = sequelize.define("pharmacist", {
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
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    qualification: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM("male", "female", "other"),
    },
  });
  Pharmacist.associate = (model) => {
    Pharmacist.belongsTo(model.User, {
      foreignKey: "users",
      as: "user",
    });
  };
  return Pharmacist;
};
module.exports = pharmacistModel;
