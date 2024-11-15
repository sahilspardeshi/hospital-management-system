//Medication First Page Code

export default function AppointmentList() {
  

  return (
    <div>
      <div className=" bg-rose-100 flex justify-between items-center  max-w-screen-2xl mx-auto">
      <h1 className="text-xl font-bold px-3 ">AppointmentList</h1>

     </div>
     <div className="  flex justify-center max-w-screen-2xl mx-auto">
    <h2 className="text-2xl text-black mb-1 font-bold mt-5">Appointment Reports</h2>
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
      
    </div>
    </div>
  );
}