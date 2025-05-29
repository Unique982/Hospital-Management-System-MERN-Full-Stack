const nurseModel = (sequelize, DataTypes) => {
  const Nurse = sequelize.define("nurse", {
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
    gender: {
      type: DataTypes.ENUM("male", "female", "other"),
      allowNull: false,
    },
    qualification: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Nurse.associate = (models) => {
    Nurse.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
    });
  };
  return Nurse;
};
module.exports = nurseModel;
