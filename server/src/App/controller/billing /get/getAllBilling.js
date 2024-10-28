import prisma from "../../../db/index.js";

export const getAllBilling = async (req, res) => {
  try {
    const billings = await prisma.billing.findMany({
      include: { AdvancePayment: true }
    });
    res.json({ data: billings });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Billing records', error: error.message });
  }
};
