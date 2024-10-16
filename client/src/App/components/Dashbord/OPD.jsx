import React, { useState } from 'react';
import Header from './Navbar';
import Sidebar from './Sidebar';

const AddAppointment = () => {
  const [patientName, setPatientName] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [appointmentNumber, setAppointmentNumber] = useState('');
  const [description, setDescription] = useState('');
  const [paymentMode, setPaymentMode] = useState('');

  // Handle Add Appointment form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !doctorName ||
      !appointmentDate ||
      !appointmentTime ||
      !appointmentNumber ||
      !paymentMode
    ) {
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
    alert("Data Submitted"); // Show alert when data is submitted
    // Reset form or handle further processing here
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

  const doctors = ["DR XYZ"];
  const patients = ["Mr ABC"];
  const paymentModes = ["Cash", "Credit Card", "Insurance"];

  const handleAddPatient = () => {
    alert("Add Patient functionality not implemented yet.");
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white text-white py-4 px-6 w-auto">
        <Header />
      </nav>

      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="bg-gray-800 text-white p-4">
          <Sidebar />
        </div>
       
        {/* Main Content - Vertically Aligned */}
        <div className="flex-1 bg-#FFFFFFA1 pt-2 flex flex-col items-center justify-start">
          {/* View History Section */}
          <form onSubmit={handleHistory} className="bg-#f4f8f9 bg-opacity-60 rounded-lg p-6 w-full max-w-4xl mb-8">
            <div className="flex  justify-between items-center mb-0">
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

          {/* Add New Appointment Form */}
          <form onSubmit={handleSubmit} className=" mt-0 bg-opacity-60 rounded-lg p-6 w-full max-w-4xl">
            <h2 className="text-lg font-semibold mb-4">Add New Appointment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              
              {/* Patient Name */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-1">Patient Name</label>
                <div className="relative">
                  <select
                    className="w-full px-3 placeholder-gray-500 py-2 pr-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                  >
                    <option value="">Select Patient</option>
                    {patients.map((patient, index) => (
                      <option key={index} value={patient}>
                        {patient}
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    className="absolute right-0 top-0 bottom-0 px-3 bg-green-500 rounded-r"
                    onClick={handleAddPatient}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Doctor Name */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-1">Doctor Name</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={doctorName}
                  onChange={(e) => setDoctorName(e.target.value)}
                >
                  <option value="">Select Doctor</option>
                  {doctors.map((doctor, index) => (
                    <option key={index} value={doctor}>
                      {doctor}
                    </option>
                  ))}
                </select>
              </div>

              {/* Appointment Date */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-1">Appointment Date</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={appointmentDate}
                  onChange={(e) => setAppointmentDate(e.target.value)}
                />
              </div>

              {/* Appointment Time */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-1">Appointment Time</label>
                <input
                  type="time"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={appointmentTime}
                  onChange={(e) => setAppointmentTime(e.target.value)}
                />
              </div>

              {/* Appointment Number */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-1">Appointment Number</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={appointmentNumber}
                  onChange={(e) => setAppointmentNumber(e.target.value)}
                />
              </div>

              {/* Payment Mode */}
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

              {/* Description and Submit Button */}
              <div className="md:col-span-2 flex flex-col md:flex-row items-start md:items-center">
                {/* Description */}
                <div className="w-full md:w-1/2 pr-2 mb-4 md:mb-0">
                  <label className="block text-gray-700 text-sm font-bold mb-1">Description</label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    rows="4"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Additional Description & Medical History"
                  />
                </div>

                {/* Submit Button */}
                <div className="w-full md:w-1/2 flex items-center justify-center">
                  <button
                    className="whitespace-nowrap bg-green-500 px-6 py-2 text-white font-semibold rounded-lg hover:bg-green-600 text-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      if (
                        doctorName &&
                        appointmentDate &&
                        appointmentTime &&
                        appointmentNumber &&
                        paymentMode
                      ) {
                        alert("Data Submitted");
                        handleSubmit(e); // Call the form submission handler
                      } else {
                        alert("Please fill in all required fields.");
                      }
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAppointment;
