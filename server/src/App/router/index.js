import express from 'express';
import AuthRoutes from '../routes/auth.routes.js';  // Add .js extension for local file import
import { healthCheck } from '../utils/healthCheck/health.controller.js';
import  settingRoute  from '../routes/routes.setting.js'
import staffRoutes from '../routes/routes.staff.js';
import opdAppointmentRoutes from '../routes/routes.opdAppointment.js';
import medicationRouter from  '../routes/routes.patientMedication.js'
import pateintreportroutes from '../routes/routes.patientreportdata.js';
import Opdtreatment from '../routes/route.Opdtreatment.js';
import billing from '../routes/route.billing.js';
import AdvancePayment from '../routes/route.advancePay.js';

import MedicationRoutes from '../routes/routes.Medication.js';
import PatientRoute from '../routes/patient.route.js';

import medication_file from '../routes/medication-file.js';


import LabReport from '../routes/routes.LabReport.js'
import mainMedication from '../routes/routes.MainMedication.js';
import medicationList from '../routes/routes.medicationList.js';





const AllRoutes = express();

// Define the route
AllRoutes.route('/health').get(healthCheck);

//setting routes
AllRoutes.use('/setting', settingRoute);
AllRoutes.use('/opdtreatment',Opdtreatment)
AllRoutes.use('/Billing',billing)
AllRoutes.use('/AdvanceBilling',AdvancePayment)
//staff routes
AllRoutes.use('/staff',staffRoutes);
AllRoutes.use('/auth',AuthRoutes);
//patientMedication routes
AllRoutes.use('/patientMedication', medicationRouter);

//MainMedication routes
AllRoutes.use('/medication_file', medication_file);

//Medication routes
AllRoutes.use('/medication',  MedicationRoutes);

//opdAppointment Routes
AllRoutes.use('/opdAppointment',opdAppointmentRoutes);

//PatintReportData route
AllRoutes.use('/patientreport',pateintreportroutes);

//patient Routes
AllRoutes.use('/patient',PatientRoute);

//LabReport routes
AllRoutes.use('/labReport',LabReport);

//main medication routes
AllRoutes.use('/mainmedication',mainMedication);

//medication list routes
AllRoutes.use('/medicationlist',medicationList)

// Export the router
export default AllRoutes;

