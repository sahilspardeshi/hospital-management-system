import prisma from "../../../db/index.js";

// Function to get a Patient Medication record by ID
export const getOneTreatment=  async (req, res) => {
    const { id } = req.params;

    try {
      const opdTreatment = await prisma.oPDTreatments.findUnique({
        where: { id: parseInt(id) },
        include: {
          MainMedicalReports: true,
          PatientMedication: true,
          MainLabReports: true,
          Appointments_OPD: true,
          Staff: true,
          Billing: true
        }
      });

      if (!opdTreatment) {
        return res.status(404).json({ message: 'OPD Treatment not found.' });
      }

      res.status(200).json(opdTreatment);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching OPD Treatment.', error: error.message });
    }
  }