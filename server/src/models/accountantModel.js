const accountantModel = (sequelize, DataTypes) => {
  const Accountant = sequelize.define("accountant", {
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
      allowNull: false,
    },
  });
  Accountant.associate = (models) => {
    Accountant.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
    });
  };
  return Accountant;
};
module.exports = accountantModel;
