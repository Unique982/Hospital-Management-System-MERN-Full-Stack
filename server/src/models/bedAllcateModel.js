const bedAllocateModel = (sequelize, DataTypes) => {
  const BedAllocate = sequelize.define("bed_allocate", {
    bed_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "beds",
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
    allocated_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    discharge: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
  BedAllocate.associate = (models) => {
    BedAllocate.belongsTo(models.Beds, {
      koreignKey: "bed_id",
      as: "bed",
    });
  };
  BedAllocate.associate = (models) => {
    BedAllocate.belongsTo(models.Patients, {
      foreignKey: "patient_id",
      as: "patinet",
    });
  };
  return BedAllocate;
};
module.exports = bedAllocateModel;
