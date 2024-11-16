// LabreportForm.js
import React, { useState } from "react"; 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const LabreportForm = () => {
  const navigate = useNavigate();
  const [labData, setLabData] = useState({
    doctorName: "Robert Harry",
    id: "KSFLJBG85",
    patientId: "LOAISERFGJ",
    doctorId: "W349587YTH9UO",
    mainReportId: "KSFLJBG85",
    cost: "549684",
    paid: "21541",
    tests: [
      { name: "Test_1", date: new Date(), result: "" },
      { name: "Test_2", date: new Date(), result: "" },
      { name: "Test_3", date: new Date(), result: "" },
    ],
  });

  const handleResultChange = (index, value) => {
    const updatedTests = [...labData.tests];
    updatedTests[index].result = value;
    setLabData({ ...labData, tests: updatedTests });
  };

  const handleDateChange = (index, date) => {
    const updatedTests = [...labData.tests];
    updatedTests[index].date = date;
    setLabData({ ...labData, tests: updatedTests });
  };

  const handleSave = () => {
    console.log("Saved lab report:", labData);
    alert("Lab report saved!");
    navigate("../technician-report", { state: { labData } }); // Navigate with data
  };

  return (
    <div className="p-4 min-h-screen max-w-5xl mx-auto">
      <div className="bg-red-100 p-2 rounded-md mb-4 text-xl font-bold">Lab report</div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-10 rounded-md shadow">
        <div>
          <label className="block text-sm font-bold">ID</label>
          <div className="bg-gray-100 p-1 rounded text-sm border border-black">{labData.id}</div>
        </div>
        <div>
          <label className="block text-sm font-bold">Patient ID</label>
          <div className="bg-gray-100 p-1 rounded text-sm border border-black">{labData.patientId}</div>
        </div>
        <div>
          <label className="block text-sm font-bold">Doctor ID</label>
          <div className="bg-gray-100 p-1 rounded text-sm border border-black">{labData.doctorId}</div>
        </div>
        <div>
          <label className="block text-sm font-bold">Main Lab Report ID</label>
          <div className="bg-gray-100 p-1 rounded text-sm border border-black">{labData.mainReportId}</div>
        </div>
        <div>
          <label className="block text-sm font-bold">Cost</label>
          <div className="bg-gray-100 p-1 rounded text-sm border border-black">{labData.cost}</div>
        </div>
        <div>
          <label className="block text-sm font-bold">Paid</label>
          <div className="bg-gray-100 p-1 rounded text-sm border border-black">{labData.paid}</div>
        </div>
      </div>
      <hr className="border-black border-1 mb-4" />

      <div className="mt-6">
        {labData.tests.map((test, index) => (
          <div key={index} className="p-3 rounded-md shadow mb-4">
            <div className="flex justify-between items-center mb-2">
              <div>
                <span className="block font-semibold text-sm">Test Name: {test.name}</span>
              </div>
              <div className="text-gray-500 text-sm">
                <DatePicker
                  selected={test.date}
                  onChange={(date) => handleDateChange(index, date)}
                  className="bg-gray-100 p-1 rounded text-sm w-28"
                  dateFormat="dd/MM/yyyy"
                />
              </div>
            </div>
            <div>
              <input
                placeholder="Result:"
                type="text"
                className="w-full bg-gray-100 p-2 rounded resize-none text-sm border"
                value={test.result}
                onChange={(e) => handleResultChange(index, e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={handleSave}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default LabreportForm;
