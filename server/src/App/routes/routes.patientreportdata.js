import express from "express";
import { updatePatientReport,getAllReports,getReportById,getReportsByAppointmentId,getReportsByPatientId } from "../controller/PatientReportData/index.js";

const pateintreportroutes = express.Router();

pateintreportroutes.route("/update/:id").put(updatePatientReport);
pateintreportroutes.route("/allReports").get(getAllReports);
pateintreportroutes.route("/appointment/:appointment_id").get(getReportsByAppointmentId);
pateintreportroutes.route("/patient/:patient_id").get(getReportsByPatientId);
pateintreportroutes.route("/reports/:report_id").get(getReportById);

export default pateintreportroutes;