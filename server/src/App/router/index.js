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





const AllRoutes = express();

// Define the route
AllRoutes.use('/auth', AuthRoutes);
AllRoutes.route('/health').get(healthCheck);

//setting routes
AllRoutes.use('/setting', settingRoute);
AllRoutes.use('/opdtreatment',Opdtreatment)
AllRoutes.use('/Billing',billing)
AllRoutes.use('/AdvanceBilling',AdvancePayment)
//staff routes
AllRoutes.use('/staff',staffRoutes);

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

// Export the router
export default AllRoutes;

