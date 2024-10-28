import express from "express";
import {createMedication,deleteMedication,updateMedication,getMedication,getAllMedications} from "../controller/Medication/index.js";

const MedicationRoutes = express.Router();

// Route to create Medication
MedicationRoutes.route('/create').post(createMedication);
MedicationRoutes.route('/delete/:id').delete(deleteMedication);
MedicationRoutes.route('/update/:id').put(updateMedication);
MedicationRoutes.route('/:id').get(getMedication);
MedicationRoutes.route('/allappointments').get(getAllMedications);

export default MedicationRoutes;

