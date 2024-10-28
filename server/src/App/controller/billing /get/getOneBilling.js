import prisma from "../../../db/index.js";

export const getOneBilling = async (req, res) => {
  const { id } = req.params;

  try {
    const billing = await prisma.billing.findUnique({
      where: { id: parseInt(id) },
      include: { AdvancePayment: true }
    });
    res.json({ data: billing });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Billing record', error: error.message });
  }
};
