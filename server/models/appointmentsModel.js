const appointmentsModel = (sequelize, DataTypes) => {
  const Appointments = sequelize.define("appointment", {
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "doctors",
        key: "id",
      },
    },
    patient_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "patients",
        key: "id",
      },
    },
    status: {
      type: DataTypes.ENUM("confirmed", "completed", "cancel"),
      allowNull: false,
      defaultValue: "confirmed",
    },
    appointmentDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    appointmentTime: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  });
  Appointments.associate = (models) => {
    Appointments.belongTo(models.Doctor, {
      foreignKey: "doctor_id",
      as: "id",
    });
  };
  Appointments.associate = (models) => {
    Appointments.belongTo(models.Patient, {
      foreignKey: "patient_id",
      as: "id",
    });
  };
  return Appointments;
};
module.exports = appointmentsModel;
