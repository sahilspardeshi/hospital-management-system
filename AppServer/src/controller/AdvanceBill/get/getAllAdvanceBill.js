import prisma from "../../../db/index.js";

export const getAllAdvancePayments = async (req, res) => {
    try {
      const advancePayments = await prisma.advancePayment.findMany();
      res.status(200).json({ message: 'Advance Payments retrieved successfully', data: advancePayments });
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving Advance Payments', error: error.message });
    }
  };
  