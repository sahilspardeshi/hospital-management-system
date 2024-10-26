import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard";
import OPD from "./pages/OPD";
import IPD from "./pages/IPD";


function SoftwareApp() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={< Dashboard/>} />
      <Route path="/OPD" element={<OPD/>} />
      <Route path="/IPD" element={< IPD/>} />
    </Routes>
  );
}

export default SoftwareApp;
