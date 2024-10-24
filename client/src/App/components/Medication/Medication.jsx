//Main file Of Medication
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MedicationList from '../Component/MedicationList';
import NewMedicationForm from '../Component/NewMedicationForm';
import MedicationDetails from '../Component/MedicationDetails';
import Header from '../DashboardSection/Nav';  
import Sidebar from '../DashboardSection/Sidebarr'; 

export const MedicationContext = React.createContext(null);

const App = () => {
  const [medications, setMedications] = useState([]);

  return (
    <div className="bg-gradient-to-r from-[#c0e2d0] to-[#d1d4d6] h-screen flex p-10">
      {/* Sidebar */}
      

      <div className="flex-1 flex flex-col bg-f3fefc ">
        {/* White rectangle for Header */}
        

        {/* Main Content - Medication Management */}
        <div className="flex-1 bg-white   ">
        <div className="bg-white  p-4 ">
        <Header />
        </div>
        <Sidebar />

          <MedicationContext.Provider value={{ medications, setMedications }}>
            <Router>
              <div className="container mx-auto">
                <Routes>
                  <Route path="/" element={<MedicationList />} />
                  <Route path="/new-medication" element={<NewMedicationForm />} />
                  <Route path="/medication-details" element={<MedicationDetails />} />
                  <Route path="/edit-medication/:id" element={<MedicationDetails />} />
                </Routes>
              </div>
            </Router>
          </MedicationContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default App;
