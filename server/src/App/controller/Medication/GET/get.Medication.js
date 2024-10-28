import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Get a MainMedication record by ID
export const getMainMedication = async (req, res) => {
  try {
    const mainMedication = await prisma.mainMedication.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    if (!mainMedication) {
      return res.status(404).json({ message: 'Main medication not found' });
    }
    res.json(mainMedication);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all MainMedication records
export const getAllMainMedications = async (req, res) => {
  try {
    const mainMedications = await prisma.mainMedication.findMany();
    res.json(mainMedications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a Medication record by ID
export const getMedication = async (req, res) => {
  try {
    const medication = await prisma.medications.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    if (!medication) {
      return res.status(404).json({ message: 'Medication not found' });
    }
    res.json(medication);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all Medication records
export const getAllMedications = async (req, res) => {
  try {
    const medications = await prisma.medications.findMany();
    res.json(medications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
