const lab_TechnicianModel = (sequelize, DataTypes) => {
  const lab_Technician = sequelize.define("lab_technician", {
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
      allowNUll: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNUll: false,
    },
    qualification: {
      type: DataTypes.STRING,
      allowNUll: false,
    },
    gender: {
      type: DataTypes.ENUM("male", "female", "other"),
      allowNUll: false,
    },
  });
  lab_Technician.associate = (models) => {
    lab_Technician.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
    });
  };
  return lab_Technician;
};
module.exports = lab_TechnicianModel;
