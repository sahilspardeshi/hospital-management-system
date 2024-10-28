import React, { useState } from "react";
import Sidebar from "../SideBar/Sidebar";
import Navbar from "../Navbar/Navbar";


const BillingReport = () => {
  const [patientName, setPatientName] = useState("");
  const [patientId, setPatientId] = useState("");
  const [treatmentId, setTreatmentId] = useState("");
  const [type, setType] = useState("OPD");

  const billingData = {
    billingId: "LSOEDUJ85",
    date: "16 Oct 2024",
    time: "12:16 PM",
    items: [
      { particular: "abc", amount: 999.0 },
      { particular: "xyz", amount: 499.0 },
      { particular: "cedf", amount: 799.0 },
    ],
    totalAmount: 2297.0,
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredItems = billingData.items.filter((item) =>
    item.particular.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const sgst = (billingData.totalAmount * 0.08).toFixed(2);
  const cgst = (billingData.totalAmount * 0.08).toFixed(2);
  const totalWithGST = (billingData.totalAmount + parseFloat(sgst) + parseFloat(cgst)).toFixed(2);
  
  return (
    <div className="min-h-screen bg-custom-gradient flex">
      <div className="bg-[#F8F7F7] bg-opacity-70 shadow-lg rounded-xl border border-gray-200 w-full max-w-full max-h-full overflow-hidden flex flex-row justify-start items-start  my-5 py-5">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          {/* main content starts from here */}
    <div className="min-h-screen bg-opacity-80 pt-10 flex">
      {/* Left side blank div taking 20% width */}
      {/* <div className="w-1/5"></div> */}

      {/* Right side (content) taking 80% width */}
      <div className="w-4/5 max-w-7xl mx-auto"> 
        <div className=" p-4 rounded-t-md ">
          <h1 className="text-3xl font-bold">Billing </h1>
          <div className="flex justify-between mt-2">
            <div className="text-sm">
              <p>
                <span className="font-bold">Billing Id:</span> {billingData.billingId}
              </p>
            </div>
            <div className="text-sm">
              <p>
                <span className="font-bold">Date:</span> {billingData.date}
              </p>
              <p>
                <span className="font-bold">Time:</span> {billingData.time}
              </p>
            </div>
          </div>
        </div>

        {/* Input fields for user data */}
        <div className="mt-4 grid grid-cols-2 gap-4 px-6">
          <div className="p-3 rounded">
            <p className="text-sm font-bold">Patient Name</p>
            <input
              className="mt-1 p-2 w-full border rounded bg-gray-200" // Added bg-gray-200
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              placeholder="Enter patient name"
            />
          </div>
          <div className="p-3 rounded">
            <p className="text-sm font-bold">Patient Id</p>
            <input
              className="mt-1 p-2 w-full border rounded bg-gray-200" // Added bg-gray-200
              type="text"
              value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
              placeholder="Enter patient ID"
            />
          </div>
          <div className="p-3 rounded">
            <p className="text-sm font-bold">Treatment Id</p>
            <input
              className="mt-1 p-2 w-full border rounded bg-gray-200" // Added bg-gray-200
              type="text"
              value={treatmentId}
              onChange={(e) => setTreatmentId(e.target.value)}
              placeholder="Enter treatment ID"
            />
          </div>
          <div className="p-3 rounded">
            <p className="text-sm font-bold">Type</p>
            <input
              className="mt-1 p-2 w-full border rounded bg-gray-200" // Added bg-gray-200
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
              placeholder="Enter type (e.g., OPD)"
            />
          </div>
        </div>

        {/* Search Input and Button */}
        <div className="flex justify-center mt-4 px-6">
          <button className="ml-4 bg-blue-500 text-white px-6 py-2 rounded-lg">
            Search
          </button>
        </div>
        <br />
        <hr className="border-black border-1" />

        {/* Billing Items Table */}
        <div className="px-6 mt-6">
          <table className="w-full">
            <thead>
              <tr className="bg-red-100">
                <th className="p-2 text-left">S.no.</th>
                <th className="p-2 text-left">Particulars</th>
                <th className="p-2 text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item, index) => (
                <tr key={index}>
                  <td className="p-2">{`${index + 1}.`}</td>
                  <td className="p-2">{item.particular}</td>
                  <td className="p-2 text-right">{`${item.amount}/-`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <hr className="border-black border-1" />

        <div className="mt-4 px-6 flex justify-end items-end gap-10">
          <p className="font-bold text-lg pr-10">Total payable amount</p>
          <p className="text-lg font-bold">{`${billingData.totalAmount}/-`}</p>
        </div>
        <div className="mt-4 px-6 flex justify-end items-end gap-10">
      <p className="font-bold text-lg pr-10">SGST 8%</p>
      <p className="text-lg font-bold">{`₹${sgst}/-`}</p>
    </div>
    <div className="mt-4 px-6 flex justify-end items-end gap-10">
      <p className="font-bold text-lg pr-10">CGST 8%</p>
      <p className="text-lg font-bold">{`₹${cgst}/-`}</p>
    </div>
    <br />

    <hr className="border-black border-1" />

    <div className="mt-4 px-6 flex justify-end items-end gap-10">
      <p className="font-bold text-lg pr-10">Total with GST</p>
      <p className="text-lg font-bold">{`₹${totalWithGST}/-`}</p>
    </div>
        <br />
        <hr className="border-black border-1" />

        <div className="px-6 py-4 flex justify-center">
          <button className="mt-6 bg-green-500 text-white px-6 py-2 rounded-lg ">
            Create Billing Report
          </button>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default BillingReport;
