import React, { useState } from 'react';
import Navbar from "../Navbar/Navbar"
import Sidebar from "../SideBar/Sidebar"
import { useNavigate } from 'react-router-dom';

const Appointment = () => {
  const [patientName, setPatientName] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [appointmentNumber, setAppointmentNumber] = useState('');
  const [description, setDescription] = useState('');
  const [paymentMode, setPaymentMode] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!doctorName || !appointmentDate || !appointmentTime || !appointmentNumber || !paymentMode) {
      alert("Please fill in all required fields.");
      return;
    }

    const appointmentData = {
      patientName,
      doctorName,
      appointmentDate,
      appointmentTime,
      appointmentNumber,
      description,
      paymentMode,
    };

    console.log(appointmentData);
    alert("Data Submitted");

    // Set the form as submitted
    setSubmitted(true);
  };

  const handleNext = () => {
    navigate('/next-page');
  };

  const doctors = ["DR XYZ"];
  const patients = ["Mr ABC"];
  const paymentModes = ["Cash", "Credit Card", "Insurance"];

  return (
    <div className="min-h-screen bg-custom-gradient flex">
      <div className="bg-[#F8F7F7] bg-opacity-70 shadow-lg rounded-xl border border-gray-200 w-full max-w-full max-h-full overflow-hidden flex flex-row justify-start items-start mx-5 my-5 px-5 py-5">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
        {/* Main Content */}
        <div className=" flex-1 p-6 rounded-lg my-10  pt-2 flex flex-col items-center justify-start ">
          {/* Button to Show Form */}
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="whitespace-nowrap bg-green-500 px-6 py-2 text-white font-semibold rounded-lg hover:bg-green-600 text-sm mb-4"
            >
              Add New Appointment
            </button>
          )}

          {/* Add New Appointment Form */}
          {showForm && (
            <form onSubmit={handleSubmit} className="mt-0 bg-opacity-60 rounded-lg p-6 w-full max-w-4xl">
              <h2 className="text-lg  my-8 bg-[#E4D7D7] text-gray-600 font-bold py-1 px-2">Add New Appointment</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-1">Patient Name</label>
                  <input 
                  placeholder='Enter Patient Name'
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                  />
                    {/* <option value="">Select Patient</option>
                    {patients.map((patient, index) => (
                      <option key={index} value={patient}>
                        {patient}
                      </option> */}
                    {/* ))} */}
                  {/* </input> */}
                  
                </div>
                

                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-1">Doctor Name</label>
                  <input
                  placeholder='Enter doctor name'
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={doctorName}
                    onChange={(e) => setDoctorName(e.target.value)}
                  />
                    {/* <option value="">Select Doctor</option>
                    {doctors.map((doctor, index) => (
                      <option key={index} value={doctor}>
                        {doctor}
                      </option>
                    ))}
                  </input> */}
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-1">Appointment Date</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-1">Appointment Time</label>
                  <input
                    type="time"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={appointmentTime}
                    onChange={(e) => setAppointmentTime(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-1">Appointment Number</label>
                  <input
                  placeholder='0'
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={appointmentNumber}
                    onChange={(e) => setAppointmentNumber(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-1">Payment Mode</label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={paymentMode}
                    onChange={(e) => setPaymentMode(e.target.value)}
                  >
                    <option value="">Select Payment Mode</option>
                    {paymentModes.map((mode, index) => (
                      <option key={index} value={mode}>
                        {mode}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-700 text-sm font-bold mb-1">Description</label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    rows="4"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Additional Description & Medical History"
                  />
                </div>

                <div className="md:col-span-2 flex justify-between w-28 m-auto font-bold">
                  {!submitted ? (
                    <button
                      type="submit"
                      className="bg-green-500 text-white px-4 py-2  rounded hover:bg-green-600"
                    >
                      Submit
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                      onClick={handleNext}
                    >
                      Next
                    </button>
                  )}
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Appointment;
