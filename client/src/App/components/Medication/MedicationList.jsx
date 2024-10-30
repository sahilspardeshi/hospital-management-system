//Medication First Page Code
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { MedicationContext } from '../Medication/Medication';
//1
export default function MedicationList() {
  const { medications } = useContext(MedicationContext);
const currentPath =window.location.pathname;
  const recentMedications = medications.slice(-3).reverse();

  return (
    <div>
      <div className=" bg-rose-100 flex justify-between items-center  max-w-screen-2xl mx-auto">
      <h1 className="text-xl font-bold px-3 ">Main Medication Report</h1>
       <Link to={`${currentPath}/new-medication`} className="bg-green-500 text-white px-4 py-2 rounded-2xl">
         Add new file +
       </Link>
     </div>
     <div className="  flex justify-center max-w-screen-2xl mx-auto">
    <h2 className="text-2xl text-black mb-1 font-bold mt-5">Reports</h2>
   </div>
    <div className="bg-white opacity-70 p-6 rounded-lg shadow-md max-w-screen-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        
        
      </div>
      <div className="mb-4 flex justify-center  space-x-2">
     <input
      type="text"
      placeholder="Search Patient Name or ID"
      className="w-2/5 p-2 border rounded-xl"
     />
     <button className="bg-green-500 text-white px-4 py-2 rounded-xl">View</button>
    </div>
      {medications.map((medication, index) => (
        <div key={index} className="flex justify-between items-center bg-gray-100 p-4 rounded-md mb-2">
          <span>{medication.id} - {medication.patientMedicationId}</span>
          <Link to={`${currentPath}/edit-medication/${medication.id}`} className="bg-green-500 text-white px-4 py-2 rounded-2xl">
            Edit
          </Link>
        </div>
      ))}
      
    </div>
    </div>
  );
}