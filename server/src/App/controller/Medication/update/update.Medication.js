import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Update a MainMedication record by ID
export const updateMainMedication = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedMedication = await prisma.mainMedication.update({
      where: { id: parseInt(id) },
      data: req.body,
    });
    res.json(updatedMedication);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a Medication record by ID
export const updateMedication = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedMedication = await prisma.medications.update({
      where: { id: parseInt(id) },
      data: req.body,
    });
    res.json(updatedMedication);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
