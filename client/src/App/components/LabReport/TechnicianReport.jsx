// TechnicianReport.js
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useLocation } from "react-router-dom";

const TechnicianReport = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const labData = location.state?.labData || {};

  const [reportData, setReportData] = useState({
    technicianReportId: "",
    reportId: labData.mainReportId || "",
    technicianId: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    notes: "1. Instruction 1\n2. Instruction 2\n3. Instruction 3",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReportData({ ...reportData, [name]: value });
  };

  const handleDateChange = (name, date) => {
    setReportData({ ...reportData, [name]: date });
  };

  const handleSave = () => {
    alert("Technician report saved!");
    // Navigate back to AllReports with all data
    navigate("lab-report", { state: { labData, reportData } });
  };

  return (
    <div className="p-5 max-w-5xl mx-auto bg-white">
      <div className="text-2xl font-bold mb-5 bg-gray-200 p-3 rounded">Technician Report</div>
      <div className="grid grid-cols-1 gap-6 p-6 rounded shadow">
        {/* First Row - Two Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold mb-1">Technician Report ID</label>
            <input
              type="text"
              name="technicianReportId"
              value={reportData.technicianReportId}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Report ID</label>
            <input
              type="text"
              name="reportId"
              value={reportData.reportId}
              readOnly
              className="w-full p-2 border rounded bg-gray-100"
            />
          </div>
        </div>
        
        {/* Second Row - Three Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-bold mb-1">Technician ID</label>
            <input
              type="text"
              name="technicianId"
              value={reportData.technicianId}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Created At</label>
            <DatePicker
              selected={reportData.createdAt}
              onChange={(date) => handleDateChange("createdAt", date)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Updated At</label>
            <DatePicker
              selected={reportData.updatedAt}
              onChange={(date) => handleDateChange("updatedAt", date)}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        {/* Technician Notes */}
        <div>
          <label className="block text-sm font-bold mb-1">Technician Notes</label>
          <textarea
            name="notes"
            value={reportData.notes}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows="4"
          />
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={handleSave}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default TechnicianReport;
