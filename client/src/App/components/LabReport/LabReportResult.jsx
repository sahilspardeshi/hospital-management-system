import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PlusIcon, MinusIcon, X } from "lucide-react";
import { useReportContext } from "./ReportContext";

//3
export default function LabReportResult() {
  const { reportData, setReportData } = useReportContext();
  const [currentReport, setCurrentReport] = useState(null);
  const [observations, setObservations] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupTech, setShowPopupTech] = useState(false);
  const [newObservation, setNewObservation] = useState({ name: "", value: "" });
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const [technicianReport, setTechnicianReport] = useState({
    report_id: "",
    technician_id: "",
    technician_notes: "",
    date: new Date().toISOString().split("T")[0],
  });

  const handleSubmit = () => {
    setShowPopupTech(true);
  };

  const handleSaveTechReport = () => {
    // Here you would normally save the technician report to your backend
    console.log("Saving technician report:", technicianReport);
    setShowPopupTech(false);

    // Update the report data in context if needed
    setReportData((prevData) => ({
      ...prevData,
      technicianReport: technicianReport,
    }));
  };

  useEffect(() => {
    const fetchReport = async () => {
      setIsLoading(true);
      try {
        if (reportData) {
          setCurrentReport(reportData);
          setObservations(reportData.observations);
        } else {
          // Fallback to fetching from API if no context data
          // Simulating API call with setTimeout
          await new Promise((resolve) => setTimeout(resolve, 1000));
          const fetchedReport = {
            id: id,
            patient_id: `KSFL${id}`,
            doctor_id: `LOAI${id}`,
            test_name: `W349588YTH${id}`,
            MainLabReports_id: "OPD",
            test_date: new Date().toISOString().split("T")[0],
            test_result: "OPD",
            reportDescription: "Fetched patient report",
            cost: "0",
            paid: "0",
            status: "New",
            observations: [],
            lastModified: new Date(),
          };
          setCurrentReport(fetchedReport);
          setObservations(fetchedReport.observations);
          setReportData(fetchedReport);
        }
      } catch (error) {
        console.log("Error fetching report:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReport();
  }, [id, reportData, setReportData]);

  const handleAddObservation = () => {
    setShowPopup(true);
  };

  const handleSaveObservation = () => {
    if (newObservation.name && newObservation.value) {
      const updatedObservations = [...observations, newObservation];
      setObservations(updatedObservations);
      setNewObservation({ name: "", value: "" });
      setShowPopup(false);

      // Update the report data in the context
      setReportData((prevData) => ({
        ...prevData,
        observations: updatedObservations,
      }));
    }
  };

  const handleDeleteObservation = (index) => {
    const updatedObservations = observations.filter((_, i) => i !== index);
    setObservations(updatedObservations);

    // Update the report data in the context
    setReportData((prevData) => ({
      ...prevData,
      observations: updatedObservations,
    }));
  };

  const handleSave = async () => {
    const updatedReport = {
      ...currentReport,
      observations,
      lastModified: new Date(),
    };
    try {
      // Simulating API call with setTimeout
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Report saved (simulated):", updatedReport);
      setReportData(updatedReport);
      navigate("../");
    } catch (error) {
      console.log("Error saving report (simulated):", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!currentReport) {
    return <div>Error loading report data</div>;
  }

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold text-center mb-6">Lab Report Result</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-normal   text-gray-700">
              Patient ID
            </label>
            <input
              type="text"
              className="mt-1 pl-2 h-8 block w-full border rounded-md shadow-sm bg-gray-100"
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
              className="mt-1 pl-2 h-8 block w-full border rounded-md shadow-sm bg-gray-100"
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
              className="mt-1 pl-2 h-8  block w-full border rounded-md shadow-sm bg-gray-100"
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
              className="mt-1  pl-2 h-8 block w-full border rounded-md shadow-sm bg-gray-100"
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
              className="mt-1 pl-2 h-8 block w-full border rounded-md shadow-sm bg-gray-100"
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
            className="mt-1 block w-full border rounded-md shadow-sm bg-gray-100"
            rows={3}
            value={currentReport.reportDescription}
            readOnly
          ></textarea>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
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
              className="mt-1 pl-2 h-8 block w-full border rounded-md shadow-sm bg-gray-100"
              value={currentReport.paid}
              readOnly
            />
          </div>
          {showPopupTech && (
            <div className="fixed inset-0 bg-black bg-opacity-50  flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg">
                <button
                  onClick={() => setShowPopupTech(false)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>

                <h2 className="text-xl font-bold mb-6">Technician Report</h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Report Id
                    </label>
                    <input
                      type="text"
                      className="w-full border rounded-md shadow-sm p-2"
                      value={technicianReport.report_id}
                      onChange={(e) =>
                        setTechnicianReport({
                          ...technicianReport,
                          report_id: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Technician Id
                    </label>
                    <input
                      type="text"
                      className="w-full border rounded-md shadow-sm p-2"
                      rows={4}
                      value={technicianReport.technician_id}
                      onChange={(e) =>
                        setTechnicianReport({
                          ...technicianReport,
                          technician_id: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Technician Notes
                    </label>
                    <input
                      type="text"
                      className="w-full border rounded-md shadow-sm p-2"
                      rows={4}
                      value={technicianReport.technician_notes}
                      onChange={(e) =>
                        setTechnicianReport({
                          ...technicianReport,
                          technician_notes: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="flex justify-end space-x-4 mt-6">
                  <button
                    onClick={() => setShowPopupTech(false)}
                    className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveTechReport}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Save Report
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="mt-6">
            <button
              type="button"
              onClick={() => {
                handleSubmit();
              }}
              className="bg-green-500 text-white px-1 py-1 rounded hover:bg-green-800"
            >
              Technician Report
            </button>
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <textarea
            className="mt-1 pl-2  block w-full border rounded-md shadow-sm bg-gray-100"
            rows={3}
            value={currentReport.status}
            readOnly
          ></textarea>
        </div>

        <hr className="border-t-1 border-gray-400 my-4" />

        <table className="w-full mt-3">
          <thead className="bg-rose-100">
            <tr>
              <th className="text-left pb-2 ">Observation Name</th>
              <th className="text-left pb-2">Observation Value</th>
              <th className="w-10">
                <button
                  onClick={handleAddObservation}
                  className="bg-green-500 text-white p-2 rounded"
                >
                  <PlusIcon className="w-5 h-5" />
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {observations.map((obs, index) => (
              <tr key={index}>
                <td className="py-2">{obs.name}</td>
                <td className="py-2">{obs.value}</td>
                <td>
                  <button
                    onClick={() => handleDeleteObservation(index)}
                    className="text-red-500"
                  >
                    <MinusIcon className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr className="border-t-1 border-gray-400 my-4" />
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-8 py-4 text-xl rounded-xl"
          >
            Save
          </button>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50  flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Add Observation</h2>
            <input
              type="text"
              placeholder="Observation Name"
              className="block w-full border pl-2 h-8 rounded-md shadow-sm mb-2"
              value={newObservation.name}
              onChange={(e) =>
                setNewObservation({ ...newObservation, name: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Observation Value"
              className="block w-full border  pl-2 h-8 rounded-md shadow-sm mb-4"
              value={newObservation.value}
              onChange={(e) =>
                setNewObservation({ ...newObservation, value: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Normal Range"
              className="block w-full border  pl-2 h-8 rounded-md shadow-sm mb-4"
              value={newObservation.value}
              onChange={(e) =>
                setNewObservation({ ...newObservation, value: e.target.value })
              }
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowPopup(false)}
                className="mr-2 ml-0 px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveObservation}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
