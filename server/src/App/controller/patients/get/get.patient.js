import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Get a Patient by ID
export const getPatientById = async (req, res) => {
    const { id } = req.params;

    try {
        const patient = await prisma.patients.findUnique({
            where: { id: BigInt(id) },
        });

        if (!patient) {
            return res.status(404).json({ error: 'Patient not found' });
        }

        // Function to serialize Patient data
        const serializePatient = (patient) => {
            return {
                ...patient,
                id: patient.id !== undefined && patient.id !== null ? patient.id.toString() : null, // Convert BigInt to string if it exists
                created_at: patient.created_at !== undefined && patient.created_at !== null ? patient.created_at.toISOString() : null, // Convert Date to ISO string if it exists
                updated_at: patient.updated_at !== undefined && patient.updated_at !== null ? patient.updated_at.toISOString() : null  // Convert Date to ISO string if it exists
            };
        };

        const serializedPatient = serializePatient(patient);
        return res.json(serializedPatient);
    } catch (error) {
        console.error('Error fetching patient:', error.message);
        return res.status(500).json({ error: 'Error fetching patient' });
    }
};


// Get all patient members
export const getAllPatients = async (req, res) => {
    try {
        const AllPatients = await prisma.patients.findMany();

        // Function to serialize staff data
        const serializePatient = (AllPatients) => {
            return AllPatients.map(patient => ({
                ...patient,
                id: patient.id !== undefined && patient.id !== null ? patient.id.toString() : null, // Convert BigInt to string if it exists
                created_at: patient.created_at !== undefined && patient.created_at !== null ? patient.created_at.toISOString() : null, // Convert Date to ISO string if it exists
                updated_at: patient.updated_at !== undefined && patient.updated_at !== null ? patient.updated_at.toISOString() : null  // Convert Date to ISO string if it exists
            }));
        };

        const serializedAllPatients = serializePatient(AllPatients);
        return res.json(serializedAllPatients);
    } catch (error) {
        console.error('Error fetching Patients:', error.message);
        return res.status(500).json({ error: 'Error fetching Patients' });
    }
};