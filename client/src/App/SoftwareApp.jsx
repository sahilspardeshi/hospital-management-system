import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";


function SoftwareApp() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default SoftwareApp;
