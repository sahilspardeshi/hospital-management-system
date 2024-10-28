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

function SoftwareApp() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {/* <Route path="/dashboard" element={< Dashboard/>} /> */}
      <Route path="/opd" element={<OPD/>} />
      {/* <Route path="/ipd" element={<IPD/>} /> */}
      <Route path="/appointment" element={<PatientRegistrationForm/>}/>
    </Routes>
  );
}

export default SoftwareApp;
