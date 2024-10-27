import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
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

  );
}

export default SoftwareApp;
