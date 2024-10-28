import prisma from "../../../db/index.js";
import {  getCurrentDateInIST } from "../../../utils/dateConverter.js";

export const updateAppointment = async (req, res) => {
  const appointment_id  = req.params.id;
  const { status, appointment_date, appointment_type, doctor_id } = req.body;

  try {
    // Find the existing appointment
    const appointment = await prisma.appointments_OPD.findUnique({
      where: { id: Number(appointment_id) },
    });

    // Check if the appointment exists
    if (!appointment) {
      return res.status(404).json({ msg: "Appointment not found" });
    }

    // Check if the appointment status is PENDING
    if (appointment.status !== "PENDING") {
      return res.status(400).json({ msg: "Only appointments with status PENDING can be updated" });
    }

    // Update the appointment only with the fields that are provided
    const updatedAppointment = await prisma.appointments_OPD.update({
      where: { id: Number(appointment_id) },
      data: {
        status: status !== undefined ? status : appointment.status, // If status is provided, update it; otherwise, keep the existing value
        appointment_date: appointment_date !== undefined ? getCurrentDateInIST() : appointment.appointment_date, // Same for appointment_date
        appointment_type: appointment_type !== undefined ? appointment_type : appointment.appointment_type, // Same for appointment_type
        doctor_id: doctor_id !== undefined ? doctor_id : appointment.doctor_id, // Same for doctor_id
        updated_at: new Date(), // Update the timestamp
      },
    });

    res.json({ msg: "Appointment updated successfully", data: updatedAppointment });
  } catch (err) {
    console.error("Error updating appointment: ", err.message);
    res.status(500).json({ msg: "Failed to update appointment", error: err.message });
  }
};
