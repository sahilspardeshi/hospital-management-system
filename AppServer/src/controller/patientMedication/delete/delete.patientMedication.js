import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Function to delete a Patient Medication record by ID
export const deletePatientMedication = async (req, res) => {
    const { id } = req.params; // Get the id from the request parameters

    try {
        // Delete the medication record from the database
        const deletedMedication = await prisma.patientMedication.delete({
            where: { id:id }, // Convert the id to BigInt for consistency
        });

        // Convert BigInt to string for serialization if needed
        // Send a success response
        return res.json({ message: 'Patient Medication deleted successfully', deletedMedication });
    } catch (error) {
        // Handle case where the medication does not exist
        if (error.code === 'P2025') {
            return res.status(404).json({ error: 'Patient Medication not found' });
        }

        console.error('Error deleting medication:', error.message);
        return res.status(500).json({ error: 'Error deleting Patient Medication' });
    }
};
