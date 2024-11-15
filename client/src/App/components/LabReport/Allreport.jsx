import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AllReports = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Initialize state with reports passed through navigation or as an empty array
  const initialReports = location.state?.reports || [];
  const [reports, setReports] = useState(initialReports);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddReport = () => {
    navigate("/labreport-form");
  };

  const handleEditReport = (reportId) => {
    navigate(`/edit-report/${reportId}`, { state: { reportId } });
  };

  // Filter reports based on the search term
  const filteredReports = reports.filter((report) =>
    report.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    report.patientId.toString().includes(searchTerm)
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md m-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Main Lab Reports</h2>
        <button onClick={handleAddReport} className="px-4 py-2 bg-green-500 text-white rounded-md">
          Add new file +
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex items-center mb-6">
        <input
          type="text"
          placeholder="Search Patient Name or ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded-l-md"
        />
        <button className="px-4 py-2 bg-green-500 text-white rounded-r-md">View</button>
      </div>

      {/* Reports List */}
      <div className="space-y-4">
        {filteredReports.length > 0 ? (
          filteredReports.map((report, index) => (
            <div key={index} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md">
              <div>
                <h3 className="text-lg font-bold">{report.patientName || `Lab Report_${index + 1}`}</h3>
                <p><strong>Patient ID:</strong> {report.patientId || "No Data"}</p>
              </div>
              <button
                onClick={() => handleEditReport(report.id)}
                className="px-4 py-2 bg-green-200 text-green-700 rounded-md"
              >
                Edit
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No reports found.</p>
        )}
      </div>
    </div>
  );
};

export default AllReports;
