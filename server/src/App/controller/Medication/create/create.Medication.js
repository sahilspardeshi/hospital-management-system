// medicationsController.js
import prisma from '../../../db/index.js';

// Create new medications from the medications array
export const createMedication = async (req, res) => {
  
  const { medications } = req.body; // Extract the medications array from req.body
  const { id} = req.body;
  const treatment_id = id;

  if (!Array.isArray(medications) || medications.length === 0) {
    return res.status(400).json({ message: 'Medications array is required and should not be empty' });
  }
  
  try {
    const newMedicationsData = await Promise.all(
      medications.map(async (med) => {
        // Fetch the medicine_id based on the medication_name from the medicationList table
        
        const medicationListEntry = await prisma.medication_list.findMany({
          where: { name: med.medication_name }
        });


        // If no matching entry is found, throw an error
        if (!medicationListEntry) {
          throw new Error(`Medicine '${med.medication_name}' not found in medicationList`);
        }

        return {
          treatment_id: treatment_id || null,
          medicine_id: medicationListEntry[0].id, // Use fetched medicine_id
          medication_name: med.medication_name,
          dosage: med.dosage,
          frequency: med.frequency,
          cost: parseFloat(med.cost) || 0,
          start_date: new Date(med.start_date),
          end_date: new Date(med.end_date),
          instructions: med.instructions || '',
        };
      })
    );
    
    
    // Use a transaction to insert all medications in a single batch

    const newMedications = await prisma.medications.createMany({
      data: newMedicationsData,
    });
  

    res.status(201).json({
      message: 'Medications created successfully',
      data: newMedicationsData,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating medications', error: error.message });
  }
};



