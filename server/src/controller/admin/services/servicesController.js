const { services } = require("../../../database/connection");
// add service
exports.addService = async (req, res) => {
  const { serviceTitle, serviceDescription } = req.body;
  if (!serviceTitle || !serviceDescription) {
    return res.status(400).json({ message: "all field are required" });
  }
  const serviceIcon = "icon.tetsing";
  await services.create({ serviceTitle, serviceDescription, serviceIcon });
  res.status(200).json({ message: "services create successfully!" });
};
// get all service
exports.getService = async (req, res) => {
  const serviceData = await services.findAll();
  res
    .status(200)
    .json({ message: "Get service successfully!", data: serviceData });
};
// update service
exports.updateService = async (req, res) => {
  const id = req.params.id;
  const { serviceTitle, serviceDescription } = req.body;
  const serviceIcon = "update.png";
  const serviceId = await services.findByPk(id);
  if (!serviceId) {
    return res.status(404).json({ message: "service id not found!" });
  }
  await services.update(
    { serviceTitle, serviceDescription, serviceIcon },
    {
      where: {
        id,
      },
    }
  );
  res.status(200).json({ message: "update successfully!" });
};

// delete service
exports.deleteService = async (req, res) => {
  const id = req.params.id;
  const serviceId = await services.findByPk(id);
  if (!serviceId) {
    return res.status(404).json({ message: "service id not found" });
  }
  await services.destroy({
    where: {
      id,
    },
  });
  res.status(200).json({ message: "delete successfully!" });
};
// single service get
exports.singleService = async (req, res) => {
  const id = req.params.id;
  const serviceData = await services.findByPk(id);
  if (!serviceData) {
    return res.status(404).json({ message: "Service id not found!" });
  }
  res
    .status(200)
    .json({ message: "single service get successfully!", data: serviceData });
};
