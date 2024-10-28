import prisma from "../../../db/index.js";


export const deleteBilling = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.billing.delete({ where: { id: parseInt(id) } });
    res.json({ message: 'Billing deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting Billing record', error: error.message });
  }
};
