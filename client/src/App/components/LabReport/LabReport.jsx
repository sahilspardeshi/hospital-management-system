import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AllReport from '../LabReport/Allreport'
import LabReportForm from '../LabReport/Labreportform';
import TechnicianReport from '../LabReport/TechnicianReport';

// Create a context for LabReport
export const LabReportContext = React.createContext(null);

const LabReport = () => {
  const [labReports, setLabReports] = useState([]); // State to manage lab reports

  return (
    <div className="flex-1 p-6 bg-white rounded-lg shadow-md m-4">
      <LabReportContext.Provider value={{ labReports, setLabReports }}>
        <div className="container mx-auto">
          <Routes>
            <Route path="" element={<AllReport />} /> {/* Home route */}
            <Route path="labreport-form" element={<LabReportForm />} /> {/* Form route */}
            <Route path="technician-report" element={<TechnicianReport />} /> {/* Technician's report route */}
          </Routes>
        </div>
      </LabReportContext.Provider>
    </div>
  );
};

export default LabReport;
