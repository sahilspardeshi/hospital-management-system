import prisma from "../../../db/index.js";

export const deleteAppointment = async (req, res) => {
  const appointment_id  = req.params.id;

  try {
    
    // Start transaction to ensure all deletions are atomic
    await prisma.$transaction(async (prisma) => {

      // Find the appointment and check its status
      const appointment = await prisma.appointments_OPD.findUnique({
        where: { id: Number(appointment_id) }
      });

      // Check if the appointment exists and its status
      if (!appointment) {
        return res.status(404).json({ msg: "Appointment not found" });
      }

      if (appointment.status !== "PENDING") {
        return res.status(400).json({ msg: "Only appointments with status PENDING can be deleted" });
      }

      // Delete the OPD Treatment associated with the appointment (if exists)
      if (appointment.oPDTreatments) {
        await prisma.oPDTreatments.delete({
          where: { id: appointment.oPDTreatments.id }, // Ensure to use the correct relation
        });
      }

      // Delete the Patient Report Data associated with the appointment (if exists)
      if (appointment.PetientReportData) {
        await prisma.petientReportData.delete({
          where: { id: appointment.PetientReportData.id },
        });
      }

      // Finally, delete the Appointment itself
      const deletedAppointment = await prisma.appointments_OPD.delete({
        where: { id: Number(appointment_id) },
      });

      res.json({ msg: "Appointment and related records deleted successfully", data: deletedAppointment });
    });
  } catch (err) {
    console.error("Error deleting appointment: ", err.message);
    res.status(500).json({ msg: "Failed to delete appointment", error: err.message });
  }
};

