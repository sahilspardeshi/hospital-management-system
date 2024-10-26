import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Function to update a Patient Medication record
export const updatePatientMedication = async (req, res) => {
    try {
        const { id } = req.params; // Get the id from the request parameters
        const { medicationName, dosage, frequency, startDate, endDate, patientId } = req.body; // Extract the data from the request body

        // Update the medication record
        const updatedMedication = await prisma.patientMedication.update({
            where: { id: BigInt(id) }, // Find the record by BigInt ID
            data: {
                medicationName: medicationName,
                dosage: dosage,
                frequency: frequency,
                startDate: new Date(startDate),
                endDate: new Date(endDate),
                patientId: BigInt(patientId), // Assuming patientId is also a BigInt
                updated_at: new Date(), // Update the timestamp
            },
        });

        console.log(updatedMedication);
        res.json({ msg: 'Successfully Updated', updatedMedication });
    } catch (error) {
        console.error('Error updating patient medication:', error.message);
        throw error; // Re-throw the error for further handling
    }
};
