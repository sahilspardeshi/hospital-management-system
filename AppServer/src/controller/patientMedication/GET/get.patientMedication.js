import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Function to get a Patient Medication record by ID
export const getPatientMedication = async (req, res) => {
    const { id } = req.params; // Get the id from the request parameters

    try {
        // Fetch the medication record from the database
        const medication = await prisma.patientMedication.findUnique({
            where: { id: BigInt(id) }, // Use the converted BigInt id
        });

        // Check if the medication exists
        if (!medication) {
            return res.status(404).json({ error: 'Patient Medication not found' });
        }

        // Convert BigInt to string for serialization
        medication.id = medication.id.toString();

        // Send the medication as a response
        return res.json({ medication });
    } catch (error) {
        console.error('Error fetching patient medication:', error.message);
        return res.status(500).json({ error: 'Error fetching patient medication' });
    }
};
