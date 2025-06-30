const ourTeamsModel = (sequelize, DataTypes) => {
  const OurTeams = sequelize.define("ourTeams", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNo: {
      type: DataTypes.STRING,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    facebookLink: {
      type: DataTypes.STRING,
    },
    linkedinLink: {
      type: DataTypes.STRING,
    },
    instagramLink: {
      type: DataTypes.STRING,
    },
  });
  return OurTeams;
};
module.exports = ourTeamsModel;
