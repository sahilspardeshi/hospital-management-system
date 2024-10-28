import express from "express";
import {createMainMedication,deleteMainMedication,updateMainMedication,getMainMedication,getAllMainMedications} from "../controller/Medication/index.js";

const MainMedicationRoutes = express.Router();

// Route to create MainMedication
MainMedicationRoutes.route('/create').post(createMainMedication);
MainMedicationRoutes.route('/delete/:id').delete(deleteMainMedication);
MainMedicationRoutes.route('/update/:id').put(updateMainMedication);
MainMedicationRoutes.route('/:id').get(getMainMedication);
MainMedicationRoutes.route('/allappointments').get(getAllMainMedications);

export default MainMedicationRoutes;

