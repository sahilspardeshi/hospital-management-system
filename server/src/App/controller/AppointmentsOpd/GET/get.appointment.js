import prisma from "../../../db/index.js";

export const getAppointmentById = async (req, res) => {
  const appointment_id = req.params.id;

  try {
    // Fetch the specific appointment by ID
    const appointment = await prisma.appointments_OPD.findUnique({
      where: { id: Number(appointment_id) }
    });

    // Check if the appointment exists
    if (!appointment) {
      return res.status(404).json({ msg: "Appointment not found" });
    }

    // Return the fetched appointment
    return res.json({ data: appointment });
  } catch (err) {
    console.error("Error fetching appointment: ", err.message);
    return res.status(500).json({ msg: "Failed to fetch appointment", error: err.message });
  }
};

//************************************************************************************************************//

export const getAllAppointments = async (req, res) => {
    try {
      // Fetch all appointments
      const appointments = await prisma.appointments_OPD.findMany({});
  
      // Return all the fetched appointments
      return res.json({ data: appointments });
    } catch (err) {
      console.error("Error fetching appointments: ", err.message);
      return res.status(500).json({ msg: "Failed to fetch appointments", error: err.message });
    }
  };