import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Delete a MainMedication record by ID
export const deleteMainMedication = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.mainMedication.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: 'Main medication deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a Medication record by ID
export const deleteMedication = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.medications.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: 'Medication deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
