import express from 'express';
import {createPatientLabReportWithMain,
    getLabReport,
    updateLabReport,
    deleteLabReport,
    addLabReportDetail,
    deleteLabReportDetail,
    updateLabTestDetails,
    createTechnicianReport,
    deleteTechnicianReport,
    updateTechnicianReport} from '../controller/patientLabReports/index.js'

    const LabReportRouter = express.Router();

    LabReportRouter.post('/create', createPatientLabReportWithMain);
    LabReportRouter.get('/get/:id', getLabReport);
    LabReportRouter.put('/update/:id', updateLabReport);
    LabReportRouter.delete('/delete/:id', deleteLabReport);

    LabReportRouter.post('/create/labTestDetails', addLabReportDetail);
    LabReportRouter.delete('/delete/labTestDetails/:id', deleteLabReportDetail);
    LabReportRouter.put('/update/labTestDetails/:id', updateLabTestDetails);

    LabReportRouter.post('/create/technicianReport', createTechnicianReport);
    LabReportRouter.delete('/delete/technicianReport/:id', deleteTechnicianReport);
    LabReportRouter.put('/update/technicianReport/:id', updateTechnicianReport);

    export default LabReportRouter;
