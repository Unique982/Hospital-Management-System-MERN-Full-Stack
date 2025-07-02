const { contactUs } = require("../../../database/connection");

exports.createContactus = async (req, res) => {
  const { contactName, contactEmail, message } = req.body;
  if (!contactName || !contactEmail || !message) {
    return res.status(400).json({ message: "all field are required!" });
  }
  await contactUs.create({ contactName, contactEmail, message });
  res.status(200).json({ message: "create successfully!" });
};

// get all contact
exports.getContactUs = async (req, res) => {
  const contactData = await contactUs.findAll();
  res.status(200).json({ message: "all contact list", data: contactData });
};
// delete contact list
exports.deleteContactUs = async (req, res) => {
  const id = req.params.id;
  const contactId = await contactUs.findByPk(id);
  if (!contactId) {
    return res.status(404).json({ message: "contact id not found!" });
  }
  await contactUs.destroy({ where: { id } });
  res.status(200).json({ message: "delete successfully!" });
};

// single contactus
exports.singleContactus = async (req, res) => {
  const id = req.params.id;
  const contactId = await contactUs.findByPk(id);
  if (!contactId) {
    return res.status(404).json({ message: "contact id not found!" });
  }
  const contactData = await contactUs.findOne({
    where: {
      id,
    },
  });
  res.status(200).json({ message: "single contact fetch!", data: contactData });
};
