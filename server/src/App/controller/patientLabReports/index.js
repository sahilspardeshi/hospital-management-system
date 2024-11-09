import {createPatientLabReportWithMain} from "./create/create.patientLabReport.js";
import {getLabReport} from "./GET/get.patientLabReport.js";
import {updateLabReport} from "./update/update.patientLabReport.js";
import {deleteLabReport} from "./delete/delete.patientLabReport.js";

// labTestDetails
import {addLabReportDetail} from "./LabTestDetails.js/create/create.labTestDetails.js";
import { deleteLabReportDetail } from "./LabTestDetails.js/delete/delete.labTestDetails.js";
import { updateLabTestDetails } from "./LabTestDetails.js/update/update.labTestDetails.js";

// technicianReports
import {createTechnicianReport} from "./TechnicianReports/create/create.TechnicianReports.js";
import {deleteTechnicianReport} from "./TechnicianReports/delete/delete.TechnicianReports.js";
import {updateTechnicianReport} from "./TechnicianReports/update/update.TechnicianReports.js";


export{
    createPatientLabReportWithMain,
    getLabReport,
    updateLabReport,
    deleteLabReport,
    addLabReportDetail,
    deleteLabReportDetail,
    updateLabTestDetails,
    createTechnicianReport,
    deleteTechnicianReport,
    updateTechnicianReport
}