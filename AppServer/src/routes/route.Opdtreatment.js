import express from 'express';

const Opdtreatment = express.Router();
import { deleteOpdTreatment, getAllTreatment, getOneTreatment, OPDTreatmentsController, OPDTreatmentsUpdate } from '../controller/opdTreatment/index.js'
// Define the routes and associate them with controller methods
Opdtreatment.post('/opd-treatments',OPDTreatmentsController );
Opdtreatment.put('/opd-treatments/:id',OPDTreatmentsUpdate) ;
    Opdtreatment.delete('/opd-treatments/:id',deleteOpdTreatment);
    Opdtreatment.get('/opd-treatments/:id', getOneTreatment);
Opdtreatment.get('/opd-treatments', getAllTreatment);

export default Opdtreatment;
