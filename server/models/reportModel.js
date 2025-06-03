const reportModel = (sequelize, DataTypes) => {
  const Report = sequelize.define("report", {
    patient_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "patients",
        key: "id",
      },
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "doctors",
        key: "id",
      },
    },
    reportType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
    },
  });
  Report.associate = (models) => {
    Report.belongsTo(models.Patients, {
      foreignKey: "id",
      as: "patient",
    });
  };
  Report.associate = (models) => {
    Report.belongsTo(models.Doctors, {
      foreignKey: "id",
      as: "doctor",
    });
  };
  return Report;
};
module.exports = reportModel;
