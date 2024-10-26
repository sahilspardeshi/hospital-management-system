import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard";
import Opd from "./pages/Opd";
import Ipd from "./pages/Ipd";


function SoftwareApp() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={< Dashboard/>} />
      <Route path="/opd" element={<Opd/>} />
      <Route path="/ipd" element={<Ipd/>} />
    </Routes>
  );
}

export default SoftwareApp;
