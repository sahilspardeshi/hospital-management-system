import prisma from "../../../db/index.js";

export const deleteMedication = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.medications.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json({ message: 'Medication deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting medication', error: error.message });
  }
};

