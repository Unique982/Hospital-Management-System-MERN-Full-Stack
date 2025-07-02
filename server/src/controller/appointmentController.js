const { appointments } = require("../database/connection");

exports.getAppointment = async (req, res, next) => {
  try {
    const allAppointmentDatas = await appointments.findAll();
    res.json({ message: "fetch Successfully data!", allAppointmentDatas });
  } catch (err) {
    res.json({ message: "error fetch data" });
  }
};

// add new appointment
exports.addAppointments = async (req, res, next) => {
  try {
    const { doctor_id, patient_id, status, appointmentDate, appointmentTime } =
      req.body;
    await appointments.create({
      doctor_id,
      patient_id,
      status,
      appointmentDate,
      appointmentTime,
    });
    res.json({ message: "New data added successfully" });
  } catch (err) {
    res.json({ message: "Error new data add" });
  }
};

// update appointments
exports.updateAppointment = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { doctor_id, patient_id, status, appointmentDate, appointmentTime } =
      req.body;
    await appointments.update(
      { doctor_id, patient_id, status, appointmentDate, appointmentTime },
      {
        where: {
          id,
        },
      }
    );
    res.json({ message: "update successfully" });
  } catch (err) {
    res.json({ message: "Update error" });
  }
};

// delete appointment
exports.deleteAppointment = async (req, res, next) => {
  try {
    const id = req.params.id;
    await appointments.destroy({
      where: {
        id,
      },
    });
    res.json({ message: "delete successfully" });
  } catch (err) {
    res.josn({ message: "delete error" });
  }
};

// single data fetch
exports.singleAppointment = async (req, res, next) => {
  try {
    const id = req.params.id;
    const singleDatas = await appointments.findByPk(id);
    res.json({ message: "single fetch sucessfully", singleDatas });
  } catch (err) {
    res.json({ message: "singel data fetch error " });
  }
};
