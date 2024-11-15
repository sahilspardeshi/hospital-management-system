import prisma from "../../../db/index.js";
import {getCurrentDateInIST } from "../../../utils/dateConverter.js";

export const createAdvancePayment = async (req, res) => {
  const { billId, amountPaid, payerName, paymentMethod, paymentDate } = req.body;

  try {
    const newAdvancePayment = await prisma.advancePayment.create({
      data: {
        billId,
        paymentDate:getCurrentDateInIST(),
        amountPaid,
        payerName,
        paymentMethod
      }
    });
    
    const billing = await prisma.billing.findUnique({
      where: { id: Number(billId) },
    });

    const updatedBilling = await prisma.billing.update({
      where: { id: parseInt(billId) },
      data: {
        amount_paid: amountPaid + billing.amount_paid,
      }
    });

    res.status(201).json({
      message: 'Advance Payment created successfully',
      data: newAdvancePayment,
      updatedBilling
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating Advance Payment record', error: error.message });
  }
};
