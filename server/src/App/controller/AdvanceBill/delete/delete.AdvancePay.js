import prisma from "../../../db/index.js";

export const deleteAdvancePayment = async (req, res) => {
    const { id } = req.params; // Advance payment ID from URL
  
    try {
      // Find the existing advance payment
      const existingPayment = await prisma.advancePayment.findUnique({
        where: { id: Number(id) },
      });
  
      if (!existingPayment) {
        return res.status(404).json({ message: 'Advance Payment not found' });
      }
  
      // Update the Billing record by deducting the amount paid
      await prisma.billing.update({
        where: { id: existingPayment.billId },
        data: {
          amount_paid: {
            decrement: existingPayment.amountPaid,
          }
        }
      });
  
      // Delete the Advance Payment record
      await prisma.advancePayment.delete({
        where: { id: Number(id) },
      });
  
      res.status(200).json({ message: 'Advance Payment deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting Advance Payment record', error: error.message });
    }
  };
  