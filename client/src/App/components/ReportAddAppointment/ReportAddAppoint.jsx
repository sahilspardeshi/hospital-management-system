import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../SideBar/Sidebar';

const ReportAddAppointment = () => {
  const [patientName, setPatientName] = useState('');
  const [reportData, setReportData] = useState(null); // Initialize reportData state
  
  // Simulate fetching report data (you can replace this with an actual API call)
  useEffect(() => {
    // Simulated report data
    const data = {
      reportId: 'R12345',
      doctorId: 'D98765',
      treatmentId: 'T56789',
      reportType: 'Blood Test',
      reportDate: '2024-10-18',
      patientName: 'John Doe',
      description: 'Detailed report description',
      status: 'Completed',
    };
    
    setReportData(data);
  }, []);

  // Handle Add Appointment form submission
  const appointmentData = {
    patientName,
  };

  // Handle View History functionality
  const handleHistory = (e) => {
    e.preventDefault();
    if (!patientName) {
      alert("Please enter a patient name to view history.");
      return;
    }
    console.log(`Viewing history for patient: ${patientName}`);
    // Add logic to fetch and display the patient's history
  };

  return (
    
    <div className="h-screen flex flex-col ">
        {/* Main Content - Vertically Aligned */}
        <div className="flex-1 pt-2 flex flex-col items-center justify-start">
          {/* View History Section */}
          <form onSubmit={handleHistory} className=" bg-opacity-60 rounded-lg p-6 w-full  max-w-5xl mb-8">
            <div className="flex justify-between items-center mb-0">
              <h2 className="text-lg font-bold pl-20">Reports</h2>
              <div className="flex space-x-2">
                {/* Search Input */}
                <input
                  type="text"
                  placeholder="Search Patient Name"
                  className="px-20 py-3 border text-sm border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                />
                {/* View History Button */}
                <button type="submit" className="whitespace-nowrap bg-green-500 px-6 py-2 text-white font-semibold rounded-lg hover:bg-green-600 text-sm">
                  View History
                </button>
              </div>
            </div>
          </form>
          <div className="flex-1   w-full max-w-6xl  flex flex-col items-center justify-start">
            <div className=" rounded-bl-2xl px-5 w-full max-w-5xl">
              <h1 className="text-2xl font-bold mb-10 mt-2 text-center">Medical Report</h1>

              {reportData ? (
                <div className="grid grid-cols-3 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">Report Id</label>
                    <div className=" bg-gray-200 rounded-md p-2">{reportData.reportId}</div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-bold mb-2">Doctor Id</label>
                    <div className="bg-gray-200 rounded-md p-2">{reportData.doctorId}</div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-bold mb-2">Treatment Id</label>
                    <div className="bg-gray-200 rounded-md p-2">{reportData.treatmentId}</div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-bold mb-2">Report Type</label>
                    <div className="bg-gray-200 rounded-md p-2">{reportData.reportType}</div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-bold mb-2">Report Date</label>
                    <div className="bg-gray-200 rounded-md p-2">{reportData.reportDate}</div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-bold mb-2">Patient Name</label>
                    <div className="bg-gray-200 rounded-md p-2">{reportData.patientName}</div>
                  </div>
                </div>
              ) : (
                <p>Loading report data...</p> // Display loading state
              )}

              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2">Report Description</label>
                <textarea
                  readOnly
                  className="w-full bg-gray-200 rounded-md p-2 h-20 resize-none"
                  value={reportData?.description || ""}
                />
              </div>

              <div className="mb-6 w-2/6">
                <label className="block text-gray-700 font-bold mb-2">Status</label>
                <div className="bg-gray-200 rounded-md p-2">{reportData?.status || ""}</div>
              </div>

              <div className="text-center">
                <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600">
                  View report result
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    
  );
};

export default ReportAddAppointment;
