import prisma from "../../../db/index.js";

export const getAllTreatment=  async (req, res) => {
    try {
      const opdTreatments = await prisma.oPDTreatments.findMany({
        include: {
          MainMedicalReports: true,
          PatientMedication: true,
          MainLabReports: true,
          Appointments_OPD: true,
          Staff: true,
          Billing: true
        }
      });

      res.status(200).json(opdTreatments);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching OPD Treatments.', error: error.message });
    }
  }