import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Appointment = () => {
  const [patientName, setPatientName] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [appointment_date, setAppointmentDate] = useState('');
  const [title, setReportTitle] = useState('Fever');
  const [appointment_type, setAppointmentType] = useState('New');
  const [description, setDescription] = useState('');
  const [status, setAppointmentStatus] = useState('PENDING');
  const [submitted, setSubmitted] = useState(false);
  const [patientSuggestions, setPatientSuggestions] = useState([]);
  const [doctorSuggestions, setDoctorSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showPatientSuggestions, setShowPatientSuggestions] = useState(false);
  const [showDoctorSuggestions, setShowDoctorSuggestions] = useState(false);
  const navigate = useNavigate();

  const fetchPatientSuggestions = async (query) => {
    if (!query) {
      setPatientSuggestions([]);
      setShowPatientSuggestions(false);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`http://localhost:4000/software/api/patient/getByName/${query}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: query }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setPatientSuggestions(data.map(patient => patient.fullName));
      setShowPatientSuggestions(true);
    } catch (error) {
      console.error('Error fetching patient suggestions:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchDoctorSuggestions = async (query) => {
    if (!query) {
      setDoctorSuggestions([]);
      setShowDoctorSuggestions(false);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`http://localhost:4000/software/api/staff/getByName/${query}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: query }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setDoctorSuggestions(data.map(doctor => doctor.fullName));
      setShowDoctorSuggestions(true);
    } catch (error) {
      console.error('Error fetching doctor suggestions:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePatientChange = (e) => {
    setPatientName(e.target.value);
    fetchPatientSuggestions(e.target.value);
    setShowPatientSuggestions(true);
  };

  const handleDoctorChange = (e) => {
    setDoctorName(e.target.value);
    fetchDoctorSuggestions(e.target.value);
    setShowDoctorSuggestions(true);
  };

  const handleSelectPatient = (patient) => {
    setPatientName(patient);
    setPatientSuggestions([]);
    setShowPatientSuggestions(false);
  };

  const handleSelectDoctor = (doctor) => {
    setDoctorName(doctor);
    setDoctorSuggestions([]);
    setShowDoctorSuggestions(false);
  };

  const renderSuggestions = (suggestions, handleSelect) => {
    return (
      <ul className="absolute bg-white border border-gray-300 mt-1 rounded-lg shadow-lg z-10">
        {suggestions.map((suggestion, index) => (
          <li
            key={index}
            className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            onMouseDown={() => handleSelect(suggestion)} // Use onMouseDown here
          >
            {suggestion}
          </li>
        ))}
      </ul>
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const appointmentData = {
      patientName,
      doctorName,
      appointment_date,
      title,
      appointment_type,
      description,
      status,
    };

    try {
      const response = await fetch('http://localhost:4000/software/api/opdAppointment/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData),
      });

      console.log(response);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setSubmitted(true);
      navigate('/appointments');
    } catch (error) {
      console.error('Error creating appointment:', error);
    }
  };

  const handlePatientFocus = () => {
    setShowPatientSuggestions(true);
  };

  const handlePatientBlur = () => {
    setShowPatientSuggestions(false);
  };

  const handleDoctorFocus = () => {
    setShowDoctorSuggestions(true);
  };

  const handleDoctorBlur = () => {
    setShowDoctorSuggestions(false);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4">Create Appointment</h1>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 relative">
            <label className="block mb-2">
              Patient Name:
              <input
                type="text"
                value={patientName}
                onChange={handlePatientChange}
                onFocus={handlePatientFocus}
                onBlur={handlePatientBlur}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
              {showPatientSuggestions && (
                renderSuggestions(patientSuggestions, handleSelectPatient)
              )}
            </label>
          </div>

          <div className="w-full md:w-1/2 px-3 relative">
            <label className="block mb-2">
              Doctor Name:
              <input
                type="text"
                value={doctorName}
                onChange={handleDoctorChange}
                onFocus={handleDoctorFocus}
                onBlur={handleDoctorBlur}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
              {showDoctorSuggestions && (
                renderSuggestions(doctorSuggestions, handleSelectDoctor)
              )}
            </label>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block mb-2">
              Appointment Date:
              <input
                type="date"
                value={appointment_date}
                onChange={(e) => setAppointmentDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </label>
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label className="block mb-2">
              Report Title:
              <select
                value={title}
                onChange={(e) => setReportTitle(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              >
                <option value="Fever">Fever</option>
                <option value="Cough">Cough</option>
                <option value="Headache">Headache</option>
              </select>
            </label>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block mb-2">
              Appointment Type:
              <select
                value={appointment_type}
                onChange={(e) => setAppointmentType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              >
                <option value="New">New</option>
                <option value="Follow-up">Follow-up</option>
              </select>
            </label>
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label className="block mb-2">
              Status:
              <select
                value={status}
                onChange={(e) => setAppointmentStatus(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              >
                <option value="PENDING">Pending</option>
                <option value="COMPLETED">Completed</option>
              </select>
            </label>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block mb-2">
              Description:
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Create Appointment
        </button>
      </form>
    </div>
  );
};

export default Appointment;
