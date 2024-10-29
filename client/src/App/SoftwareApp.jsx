import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
// import Dashboard from "./pages/Dashbord";
import OPD from "./pages/OPD";
// import IPD from "./pages/Ipd";
import IPD from "./components/IPD/IPD";
import Dashboard from "./pages/Dashbord";
import Graphs from "./components/graph/graph";
import PatientRegistrationForm from "./components/PatientRegistrationForm/PatientRegistrationForm";
import Appointment from "./components/Appointment/Appointment";
import Ipd from "./pages/IPD";
import PatientCard from "./components/History/PatientCard"
import MainMedicalReport from "./components/MedicalReportSystem/MainMedicalReport";
import Medication from "./components/Medication/Medication";
import BillingReport from "./components/OPD Billing/BillingReport";
import Patient from "./components/Patient/Patient";
import ReportAddAppointment from "./components/ReportAddAppointment/ReportAddAppoint";
import StaffSection from "./components/Staff/StaffSection";
import WardSection from "./components/WardSection/Wardsection";

function SoftwareApp() {
  return (
  
   <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>}>
          <Route path="" element={<Graphs/>} />
        </Route>
        <Route path="/opd" element={<OPD/>}>
        <Route path="" element={<PatientRegistrationForm/>}/>
        <Route path="Appointment" element={<WardSection/>}/>
        </Route>
        <Route path="/ipd" element={<Ipd/>}>
        <Route path="" element={<PatientRegistrationForm/>}/>
        <Route path="Appointment" element={<Appointment/>}/>
        </Route>
      </Routes>
 
  );
}

export default SoftwareApp;
