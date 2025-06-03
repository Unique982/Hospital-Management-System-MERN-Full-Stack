const userModel = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    role: {
      type: DataTypes.ENUM(
        "admin",
        "doctor",
        "nurse",
        "receptionist",
        "pharmacist",
        "accountant",
        "lab_technician",
        "patient"
      ),
      allowNull: false,
      defaultValue: "patient",
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    otp: {
      type: DataTypes.STRING,
    },
    otpExpires: {
      type: DataTypes.DATE,
    },
  });
  return User;
};
module.exports = userModel;
