import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage";

function WebApp() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
  );
}

export default WebApp;
