import prisma from "../../../db/index.js";
import {  getCurrentDateInIST } from "../../../utils/dateConverter.js";

export const updateBilling = async (req, res) => {
  const { id } = req.params;
  const {
    patient_id,
    ODPtreatment_id,
    IPDAdmissions_id,
    IPDtreatment_id,
    ANCtreatment_id,
    type,
    bill_date,
    total_amount,
    amount_paid,
    payment_status
  } = req.body;

  try {
    const updatedBilling = await prisma.billing.update({
      where: { id: parseInt(id) },
      data: {
        patient_id: patient_id ?? undefined,
        ODPtreatment_id: ODPtreatment_id ?? undefined,
        IPDAdmissions_id: IPDAdmissions_id ?? undefined,
        IPDtreatment_id: IPDtreatment_id ?? undefined,
        ANCtreatment_id: ANCtreatment_id ?? undefined,
        type: type ?? undefined,
        bill_date: bill_date ? getCurrentDateInIST(): undefined,
        total_amount: total_amount ?? undefined,
        amount_paid: amount_paid ?? undefined,
        payment_status: payment_status ?? undefined
      }
    });
    res.json({ message: 'Billing updated successfully', data: updatedBilling });
  } catch (error) {
    res.status(500).json({ message: 'Error updating Billing record', error: error.message });
  }
};
