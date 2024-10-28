import express from 'express';
import { createAdvancePayment, deleteAdvancePayment, getAdvancePaymentById, getAllAdvancePayments, updateAdvancePayment } from '../controller/AdvanceBill/index.js';

const AdvancePayment = express.Router();

AdvancePayment.post('/advance-payments', createAdvancePayment);
AdvancePayment.put('/advance-payments/:id',updateAdvancePayment );
AdvancePayment.delete('/advance-payments/:id', deleteAdvancePayment);
AdvancePayment.get('/advance-payments', getAllAdvancePayments);
AdvancePayment.get('/advance-payments/:id',getAdvancePaymentById);

export default AdvancePayment;
