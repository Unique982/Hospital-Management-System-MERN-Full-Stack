const { ourTeams } = require("../../../database/connection");

exports.createOurTeams = async (req, res) => {
  const {
    name,
    position,
    phoneNo,
    description,
    facebookLink,
    linkedinLink,
    instagramLink,
  } = req.body;

  if (!name || !position || !phoneNo || !description) {
    return res.status(200).json({ message: "all field are require" });
  }
  await ourTeams.create({
    name,
    position,
    phoneNo,
    description,
    facebookLink,
    linkedinLink,
    instagramLink,
  });
  res.status(200).json({ message: "create successfully!" });
};

// get our teams all
exports.getOurTeams = async (req, res) => {
  const ourTeamsData = await ourTeams.findAll();
  res
    .status(200)
    .json({ message: "get All ourTeams list", data: ourTeamsData });
};

// update
exports.updateOurTeams = async (req, res) => {
  const id = req.params.id;
  const {
    name,
    position,
    phoneNo,
    description,
    facebookLink,
    linkedinLink,
    instagramLink,
  } = req.body;

  const ourTeamsId = await ourTeams.findByPk(id);
  if (!ourTeamsId) {
    return res.status(404).json({ message: "ourTeams if not found!" });
  }
  await ourTeams.update(
    {
      name,
      position,
      phoneNo,
      description,
      facebookLink,
      linkedinLink,
      instagramLink,
    },
    {
      where: {
        id,
      },
    }
  );
  res.status(200).json({ message: "Update successfully!" });
};
// delete
exports.deleteOurTeams = async (req, res) => {
  const id = req.params.id;
  const ourTeamsId = await ourTeams.findByPk(id);
  if (!ourTeamsId) {
    return res.status(404).json({ message: "OurTeams id not found!" });
  }
  await ourTeams.destroy({ where: { id } });
  res.status(200).json({ message: "delete successfully!" });
};
// single
exports.singleOurTeam = async (req, res) => {
  const id = req.params.id;
  const ourTeamsId = await ourTeams.findByPk(id);
  if (!ourTeamsId) {
    return res.status(404).json({ message: "ourTeams id not found!" });
  }
  const ourTeamsData = await ourTeams.findOne({ where: { id } });
  res.status(200).json({ message: "single data !", data: ourTeamsData });
};
