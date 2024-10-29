import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const updateaPatient = async (req, res) => {
    const { id } = req.params;
    const { full_name, date_of_birth, gender, blood_group, mobile_number, address, email} = req.body;

    try {
        const updatedPatient = await prisma.patients.update({
            where: { id: BigInt(id) },
            data: {
                full_name, 
                date_of_birth, 
                gender, 
                blood_group, 
                mobile_number, 
                address, 
                email,
                updated_at: new Date(), 
            },
        });

        // Function to serialize staff data
        const serializePatient = (patient) => {
            return {
                ...patient,
                id: patient.id !== undefined && patient.id !== null ? patient.id.toString() : null, // Convert BigInt to string if it exists
                created_at: patient.created_at !== undefined && patient.created_at !== null ? patient.created_at.toISOString() : null, // Convert Date to ISO string if it exists
                updated_at: patient.updated_at !== undefined && patient.updated_at !== null ? patient.updated_at.toISOString() : null  // Convert Date to ISO string if it exists
            };
        };

        const serializedUpdatedPatient = serializePatient(updatedPatient);
        return res.json(serializedUpdatedPatient);
    } catch (error) {
        console.error('Error updating patient:', error.message);
        return res.status(500).json({ error: 'Error updating Patient' });
    }
};