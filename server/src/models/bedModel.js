const bedModel = (sequelize, DataTypes) => {
  const Bed = sequelize.define("bed", {
    bedNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    bedType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM(
        "available",
        "occupied",
        "maintenance",
        "reserved",
        "cleaning"
      ),
      default: "available",
      allowNull: false,
    },
  });
  return Bed;
};
module.exports = bedModel;
