import prisma from "../../../db/index.js";

export const getAdvancePaymentById = async (req, res) => {
    const { id } = req.params; // Advance payment ID from URL
  
    try {
      const advancePayment = await prisma.advancePayment.findUnique({
        where: { id: Number(id) },
      });
  
      if (!advancePayment) {
        return res.status(404).json({ message: 'Advance Payment not found' });
      }
  
      res.status(200).json({ message: 'Advance Payment retrieved successfully', data: advancePayment });
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving Advance Payment', error: error.message });
    }
  };
  