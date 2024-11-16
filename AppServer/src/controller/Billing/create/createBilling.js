import prisma from "../../../db/index.js";
import { getCurrentDateInIST } from "../../../utils/dateConverter.js";


export const createBilling = async (req, res) => {
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
    const newBilling = await prisma.billing.create({
      data: {
        patient_id,
        ODPtreatment_id,
        IPDAdmissions_id,
        IPDtreatment_id,
        ANCtreatment_id,
        type,
        bill_date: getCurrentDateInIST(),
        total_amount,
        amount_paid,
        payment_status
      }
    });
    res.status(201).json({ message: 'Billing created successfully', data: newBilling });
  } catch (error) {
    res.status(500).json({ message: 'Error creating Billing record', error: error.message });
  }
};
