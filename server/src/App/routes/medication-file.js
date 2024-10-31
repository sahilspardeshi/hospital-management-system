import express from 'express';
import { createMainMedication,getMainMedications} from '../controller/medicationFile/index.js'; // Update with the path to your controller file

const medication_file = express.Router();

// Create a new MainMedication
medication_file.post('/main-medications', createMainMedication);

// Get all MainMedications (or filter by ID if specified)
medication_file.get('/main-medications/:id?', getMainMedications);

// // Update a MainMedication by ID
// router.put('/main-medications/:id', updateMainMedication);

// // Delete a MainMedication by ID
// router.delete('/main-medications/:id', deleteMainMedication);

export default medication_file;
