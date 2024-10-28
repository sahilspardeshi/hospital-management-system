import prisma from "../../../db/index.js";

export const updateAdvancePayment = async (req, res) => {
    const { id } = req.params; // Advance payment ID from URL
    const { amountPaid, payerName, paymentMethod, paymentDate } = req.body;
  
    try {
      // Find the existing advance payment
      const existingPayment = await prisma.advancePayment.findUnique({
        where: { id: Number(id) },
      });
  
      if (!existingPayment) {
        return res.status(404).json({ message: 'Advance Payment not found' });
      }
  
      // Calculate the amount difference
      const amountDifference = amountPaid - existingPayment.amountPaid;
  
      // Update the Advance Payment record
      const updatedAdvancePayment = await prisma.advancePayment.update({
        where: { id: Number(id) },
        data: {
          amountPaid,
          payerName,
          paymentMethod,
          paymentDate: new Date(convertIndianDateToPostgres(paymentDate)),
        }
      });
  
      // Update the Billing record
      const updatedBilling = await prisma.billing.update({
        where: { id: existingPayment.billId },
        data: {
          amount_paid: {
            increment: amountDifference,
          }
        }
      });
  
      res.status(200).json({
        message: 'Advance Payment updated successfully',
        data: updatedAdvancePayment,
        updatedBilling
      });
    } catch (error) {
      res.status(500).json({ message: 'Error updating Advance Payment record', error: error.message });
    }
  };
  