import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useReportContext } from "./ReportContext";
//2
export default function LabReport() {
  const [currentReport, setCurrentReport] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { setReportData } = useReportContext();

  useEffect(() => {
    const fetchNewReport = async () => {
      setIsLoading(true);
      try {
        // Simulating API call with setTimeout
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const newReport = {
          id: "4",
          patient_id: "KSFL18004",
          doctor_id: "LOAI5004",
          test_name: "W349591YTH4",
          MainLabReports_id: "OPD",
          test_date: new Date().toISOString().split("T")[0],
          test_result: "OPD",
          reportDescription: "New patient report",
          cost: "0",
          paid: "0",
          status: "New",
          observations: [],
          lastModified: new Date(),
        };
        setCurrentReport(newReport);
        setReportData(newReport);
      } catch (error) {
        console.log("Error fetching new report:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNewReport();
  }, [setReportData]);

  const handleNextFromB = () => {
    const pathSegments = window.location.pathname.split("/");
    pathSegments[pathSegments.length - 1] = `lab-report-result/${currentReport.id}`;
    const newPath = pathSegments.join("/");
    console.log(newPath);
    navigate(newPath);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!currentReport) {
    return <div>Error loading report data</div>;
  }

  return (
    <div className="p-8">
      <div className="bg-rose-100 h-4 flex justify-between items-center max-w-screen-2xl mx-auto p-4">
        <h1 className="text-lg font-bold text-gray-800 border-b pb-0">
          Lab report
        </h1>
      </div>
      <div className="bg-customGreen rounded-2xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div> 
            <label className="block text-sm font-normal text-gray-700">
              Patient ID
            </label>
            <input
              type="text"
              className="mt-1 pl-2 h-8  block w-full border rounded-md shadow-sm bg-gray-100"
              value={currentReport.patient_id}
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Doctor ID
            </label>
            <input
              type="text"
              className="mt-1 pl-2 h-8  block w-full border rounded-md shadow-sm bg-gray-100"
              value={currentReport.doctor_id}
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Test Name
            </label>
            <input
              type="text"
              className="mt-1 pl-2 h-8   block w-full border rounded-md shadow-sm bg-gray-100"
              value={currentReport.test_name}
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Main Lab Report ID
            </label>
            <input
              type="text"
              className="mt-1 pl-2 h-8  block w-full border rounded-md shadow-sm bg-gray-100"
              value={currentReport.MainLabReports_id}
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Test Date
            </label>
            <input
              type="date"
              className="mt-1 pl-2 h-8  block w-full border rounded-md shadow-sm bg-gray-100"
              value={currentReport.test_date}
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Test Result
            </label>
            <input
              type="text"
              className="mt-1 pl-2 h-8  block w-full border rounded-md shadow-sm bg-gray-100"
              value={currentReport.test_result}
              readOnly
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Report description
          </label>
          <textarea
            className="mt-1 pl-2  block w-full border rounded-md shadow-sm bg-gray-100"
            rows={3}
            value={currentReport.reportDescription}
            readOnly
          ></textarea>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Cost
            </label>
            <input
              type="text"
              className="mt-1 pl-2 h-8 block w-full border rounded-md shadow-sm bg-gray-100"
              value={currentReport.cost}
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Paid
            </label>
            <input
              type="text"
              className="mt-1 pl-2 h-8  block w-full border rounded-md shadow-sm bg-gray-100"
              value={currentReport.paid}
              readOnly
            />
          </div>
          <div></div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <textarea
            className="mt-1 pl-2 block w-full border rounded-md shadow-sm bg-gray-100"
            rows={3}
            value={currentReport.status}
            readOnly
          ></textarea>
        </div>

        <div className="mt-6 col-span-3 flex justify-center">
          <button
            onClick={handleNextFromB}
            className="bg-green-600  text-white px-8 py-3 text-lg rounded-md"
          >
            Next &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
