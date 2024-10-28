
import prisma from '../../../db/index.js';
export const OPDTreatmentsUpdate =  async (req, res) => {
    const { id } = req.params;
    const { appointment_id, patient_id, doctor_id, diagnosis, treatment_plan, report_file, follow_up_date } = req.body;

    try {
      // Find the current data for the OPD Treatment
      const currentData = await prisma.oPDTreatments.findUnique({
        where: { id: parseInt(id) }
      });

      if (!currentData) {
        return res.status(404).json({ message: 'OPD Treatment not found.' });
      }

      // Only update fields if they are provided in the request body
      const updatedTreatment = await prisma.oPDTreatments.update({
        where: { id: parseInt(id) },
        data: {
          appointment_id: appointment_id !== undefined ? appointment_id : currentData.appointment_id,
          patient_id: patient_id !== undefined ? patient_id : currentData.patient_id,
          doctor_id: doctor_id !== undefined ? doctor_id : currentData.doctor_id,
          diagnosis: diagnosis !== undefined ? diagnosis : currentData.diagnosis,
          treatment_plan: treatment_plan !== undefined ? treatment_plan : currentData.treatment_plan,
          report_file: report_file !== undefined ? report_file : currentData.report_file,
          follow_up_date: follow_up_date !== undefined ? follow_up_date : currentData.follow_up_date,
          updated_at: new Date() // Update the timestamp
        }
      });

      res.status(200).json({ msg: 'Successfully updated OPD Treatment', data: updatedTreatment });
    } catch (error) {
      res.status(500).json({ message: 'Error updating OPD Treatment.', error: error.message });
    }
  }
