import express from 'express';
import { createBilling, deleteBilling, getAllBilling, getOneBilling, updateBilling } from '../controller/billing /index.js'
const billing = express.Router();

// Billing routes
billing.post('/billing',createBilling );
billing.put('/billing/:id', updateBilling);
billing.delete('/billing/:id', deleteBilling);
billing.get('/billing/:id', getOneBilling);
billing.get('/billing', getAllBilling);
export default billing;
