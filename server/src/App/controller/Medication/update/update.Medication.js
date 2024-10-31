import prisma from "../../../db/index.js";

export const updateMedication = async (req, res) => {
  const { id } = req.params;
  const {
    treatment_id,
    medicine_id,
    medication_name,
    dosage,
    frequency,
    cost,
    start_date,
    end_date,
    instructions
  } = req.body;

  try {
    const updatedMedication = await prisma.medications.update({
      where: { id: parseInt(id) },
      data: {
        treatment_id,
        medicine_id,
        medication_name,
        dosage,
        frequency,
        cost,
        start_date,
        end_date,
        instructions
      },
    });
    res.status(200).json({ message: 'Medication updated successfully', data: updatedMedication });
  } catch (error) {
    res.status(500).json({ message: 'Error updating medication', error: error.message });
  }
};
