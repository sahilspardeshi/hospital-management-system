import express from 'express';
import { createPatient, deletePatient, getAllPatients, getPatientById, updateaPatient ,getPatientByName} from '../controller/patients/index.js'

const PatientRoute = express.Router();

PatientRoute.route('/create').post(createPatient);
PatientRoute.route('/delete/:id').delete(deletePatient);
PatientRoute.route('/update/:id').put(updateaPatient);
PatientRoute.route('/:id').get(getPatientById);
PatientRoute.route('/getAll').get(getAllPatients);
PatientRoute.route('/getByName/:name').post(getPatientByName);

export default PatientRoute;