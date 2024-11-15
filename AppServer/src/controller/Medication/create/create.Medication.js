// medicationsController.js
import prisma from '../../../db/index.js';

// Create a new medication
export const createMedication = async (req, res) => {
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
    const newMedication = await prisma.medications.create({
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
    res.status(201).json({ message: 'Medication created successfully', data: newMedication });
  } catch (error) {
    res.status(500).json({ message: 'Error creating medication', error: error.message });
  }
};


// Update a medication by ID


