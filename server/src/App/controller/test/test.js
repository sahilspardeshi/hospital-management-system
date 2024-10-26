import prisma from "../../db/index.js";

export const createAppointment = async (req, res) => {
  const {
    patient_id,
    doctor_id,
    appointment_date,
    appointment_time,
    appointment_type,
    status,
  } = req.body;

  try {
    const appointment_dateTime = new Date(`${appointment_date}T${appointment_time}:00.000Z`);

    // Step 1: Create a new PetientReportData record
    const patientReportData = await prisma.petientReportData.create({
      data: { 
        title: "New Report",
        discription: "Report created for this appointment",
        status: "Pending",
        petinet_id: Number(patient_id),  // Convert to Int if necessary
      },
    });

    // Step 2: Create a new appointment using the created PetientReportData ID
    const newAppointment = await prisma.appointments_OPD.create({
      data: {
        patient_id: Number(patient_id),
        doctor_id: Number(doctor_id),
        PetientReportData_id: Number(patientReportData.id),
        appointment_type,
        status,
      },
    });

    res.json({ msg: "success", data: newAppointment });
  } catch (err) {
    console.error("Error creating appointment:", err);
    res.status(500).json({
      error: "An error occurred while creating the appointment",
      details: err.message,
    });
  }
};
