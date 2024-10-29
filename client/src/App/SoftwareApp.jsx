import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
<<<<<<< HEAD
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
import MainMedicalReport from "./components/MedicalReportSystem/MainMedicalReport";
import Medication from "./components/Medication/Medication";

function SoftwareApp() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {/* <Route path="/dashboard" element={< Dashboard/>} /> */}
      <Route path="/opd" element={<OPD/>} />
      {/* <Route path="/ipd" element={<IPD/>} /> */}
      <Route path="/appointment" element={<Medication/>}/>
    </Routes>
=======
import OPD from "./pages/OPD";
import IPD from "./pages/IPD";
import Patient from "./components/Patient/Patient";
import Appointment from "./components/Appointment/Appointment";
import Profile from "./components/Profile/Profile";
import Dashboard from "./pages/dashboard";




function SoftwareApp() {
  return (
   
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/opd" element={<OPD />}>
          <Route path="" element={<Patient/>} />
          <Route path="appointment" element={<Appointment />} />
          {/* <Route path="tables" element={<Tables />} />  */}
          {/* <Route path="articles" element={<Articles/>} /> */}
          <Route path="profile" element={<Profile />} />
          {/* <Route path="logout" element={<Logout />} />   */}
        </Route>
        <Route path="/ipd" element={<IPD />} />
      </Routes>

>>>>>>> features/patientController
  );
}

export default SoftwareApp;
