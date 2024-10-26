import { PrismaClient } from '@prisma/client';

let prisma = new PrismaClient();

// Function to create a new Patient Medication record
export const createPatientMedication = async (req, res) => {
    const { 
        ODPtreatment_id, 
        IPDtreatment_id, 
        ANCtreatment_id, 
        doctor_id, 
        Medication_count, 
        cost, 
        paid, 
        type, 
        description, 
        start_date, 
        end_date 
    } = req.body;

    try {
        // Check if the medication already exists
        const existingMedication = await prisma.patientMedication.findFirst({
            where: {
                ODPtreatment_id: ODPtreatment_id,
                IPDtreatment_id: IPDtreatment_id,
                ANCtreatment_id: ANCtreatment_id,
                doctor_id: doctor_id,
                start_date: start_date,
                end_date: end_date
            }
        });

        if (existingMedication) {
            return res.status(400).json({ message: 'Medication already exists for this treatment and doctor.' });
        }

        // If no existing medication is found, create a new one
        const newMedication = await prisma.patientMedication.create({
            data: {
                ODPtreatment_id,
                IPDtreatment_id,
                ANCtreatment_id,
                doctor_id,
                Medication_count,
                cost,
                paid,
                type,
                description,
                start_date,
                end_date
            }
        });

        console.log(newMedication); // Log the created record
        res.json({ msg: 'Successfully created Patient Medication', data: newMedication });
    } catch (error) {
        console.error('Error creating Patient Medication:', error.message);
        res.status(500).json({ message: 'Error creating Patient Medication.', error: error.message });
        throw error; // Re-throw error for further handling
    }
};
