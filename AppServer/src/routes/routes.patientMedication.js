// src/App/routes/patientMedication.routes.js

import express from 'express';
import { createPatientMedication, deletePatientMedication, getPatientMedication, updatePatientMedication } from '../controller/patientMedication/index.js';

const medicationRouter = express.Router();

// Route to create patient medication
medicationRouter.post('/patient-medication', createPatientMedication);
medicationRouter.delete('/patient-medication/:id', deletePatientMedication);
medicationRouter.get('/patient-medication/:id', getPatientMedication);
medicationRouter.put('/patient-medication/:id', updatePatientMedication);


export default medicationRouter;
