import prisma from "../../../db/index.js";

// Get all medications
export const getAllMedications = async (req, res) => {
  try {
    const medications = await prisma.medications.findMany(
       {  where: { id: parseInt(req.params.id) },}
    );
    res.status(200).json({ data: medications });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching medications', error: error.message });
  }
};

// Get a single medication by ID
export const getMedicationById = async (req, res) => {
  const { id } = req.params;

  try {
    const medication = await prisma.medications.findUnique({
      where: { id: parseInt(id) },
    });
    res.status(200).json({ data: medication });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching medication', error: error.message });
  }
};
