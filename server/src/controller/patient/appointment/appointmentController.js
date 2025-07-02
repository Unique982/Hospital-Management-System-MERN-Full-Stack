const {
  users,
  appointments,
  patients,
} = require("../../../database/connection");

exports.bookingAppointment = async (req, res) => {
  // user login id aayu xa
  const userId = req.user?.id;
  const { doctor_id, status, appointmentDate, appointmentTime } = req.body;
  const patient = await patients.findOne({ where: { user_id: userId } });
  if (!patient) {
    return res.status(400).json({ message: "invliad patient" });
  }
  // check allready or not appointment  same time same doctor patient date and time
  const allreadyAppointment = await appointments.findOne({
    where: {
      doctor_id,
      patient_id: patient.id,
      appointmentDate,
      appointmentTime,
    },
  });
  if (allreadyAppointment) {
    return res.json({ message: "already Booked appointment!" });
  }
  // create appointment
  await appointments.create({
    doctor_id,
    patient_id: patient.id,
    status,
    appointmentDate,
    appointmentTime,
  });
  res.status(200).json({ message: "Appointment booking successes!" });
};

// aba chai patient la kati ota appoitment garay ko xa patient id check garxa patient 1 ko mtw aayu xa kati ota app garay koxa
exports.getAppointment = async (req, res) => {
  const userId = req.user?.id;
  // yo prcoess chai k garay ko ho vanni  paila kun patinet login xa check garxa ani login vaya ko patinet jun xa tasako id chai patinet table bata linxa
  const patient = await patients.findOne({ where: { user_id: userId } });
  // aba tyo patient table bata aaya ko id chai patinet varable ma store vayo

  const appoitmentData = await appointments.findAll({
    where: { patient_id: patient.id },
  });
  res
    .status(200)
    .json({ message: "all Appointment list!", data: appoitmentData });
};

exports.cancellAppointment = async (req, res) => {
  const userId = req.user?.id;
  const id = req.params.id;
  const appointment = await appointments.findOne({ where: { id } });
  if (!appointment) {
    return res.status(404).json({ message: "appointment id not found!" });
  }
  appointment.status = "cancel";
  await appointment.save();
  res.status(200).json({ message: "Appoitment cancell!" });
};

exports.deleteAppointment = async (req, res) => {
  const userId = req.user?.id;
  const id = req.params.id;
  const appointment = await appointments.findOne({ where: { id } });
  if (!appointment) {
    return res.json({ message: "Appointment id not found!" });
  }
  if (appointment.status !== "cancel") {
    return res
      .status(400)
      .json({ message: "Appointment status cancelled only delete!" });
  }
  await appointments.destroy({ where: { id } });
  res.status(200).json({ message: "Delete Appointment successfully!" });
};
