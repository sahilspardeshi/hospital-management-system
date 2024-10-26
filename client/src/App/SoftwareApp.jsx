import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashbord";
import OPD from "./pages/OPD";
import IPD from "./pages/Ipd";

function SoftwareApp() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={< Dashboard/>} />
      <Route path="/opd" element={<OPD/>} />
      <Route path="/ipd" element={<IPD/>} />
    </Routes>
  );
}

export default SoftwareApp;
