const doctorModel = (sequelize, DataTypes) => {
  const Doctor = sequelize.define("doctor", {
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
    specialization: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "specializations",
        key: "id",
      },
    },
    gender: {
      type: DataTypes.ENUM("male", "female", "other"),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
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
  });
  Doctor.associate = (models) => {
    Doctor.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
    });
  };
  return Doctor;
};
module.exports = doctorModel;
