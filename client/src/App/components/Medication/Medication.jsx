import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MedicationList from '../Medication/MedicationList';
import NewMedicationForm from '../Medication/NewMedicationForm';
import MedicationDetails from '../Medication/MedicationDetails';
import Navbar from "../Navbar/Navbar";
import Sidebar from "../SideBar/Sidebar";

export const MedicationContext = React.createContext(null);

const Medication = () => {
  const [medications, setMedications] = useState([]);

  return (
    <div className="min-h-screen bg-custom-gradient flex">
      {/* Sidebar */}
      <Sidebar />
      <div className="flex-1 flex flex-col bg-[#F8F7F7] bg-opacity-70 shadow-lg rounded-xl border border-gray-200 mx-5 my-5 overflow-hidden">
        <Navbar />
        {/* Main Content - Medication Management */}
        <div className="flex-1 p-6 bg-white rounded-lg shadow-md m-4">
          <MedicationContext.Provider value={{ medications, setMedications }}>
            <div className="container mx-auto">
              <Routes>
                <Route path="/" element={<MedicationList />} />
                <Route path="/new-medication" element={<NewMedicationForm />} />
                <Route path="/medication-details" element={<MedicationDetails />} />
                <Route path="/edit-medication/:id" element={<MedicationDetails />} />
              </Routes>
            </div>
          </MedicationContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Medication;
