import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
// import Dashboard from "./pages/Dashbord";
import OPD from "./pages/OPD";
// import IPD from "./pages/Ipd";
import Dashboard from './components/DashboardSection/Dashboard'
import Appointment from "./components/Appointment/Appointment";
import PatientCard from './components/History/PatientCard'
import IPD from "./components/IPD/IPD";
import BillingReport from "./components/OPD Billing/BillingReport";
import PatientRegistrationForm from "./components/PatientRegistrationForm/PatientRegistrationForm";
import Profileupdate from "./components/ProfileUpdate/Profileupdate";
import ReportAddAppointment from "./components/ReportAddAppointment/ReportAddAppoint";
import StaffSection from "./components/Staff/StaffSection";
import WardSection from "./components/WardSection/Wardsection";

function SoftwareApp() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {/* <Route path="/dashboard" element={< Dashboard/>} /> */}
      <Route path="/opd" element={<OPD/>} />
      {/* <Route path="/ipd" element={<IPD/>} /> */}
      <Route path="/appointment" element={<WardSection/>}/>
    </Routes>
  );
}

export default SoftwareApp;
