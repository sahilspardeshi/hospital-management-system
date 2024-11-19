import { useState, useEffect } from 'react';
import axiosInstanceApp from "../../axiosConfig";

export default function AppointmentList() {
  const [appointments, setAppointments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredAppointments, setFilteredAppointments] = useState([]);

  useEffect(() => {
    axiosInstanceApp.get('/opdAppointment/AllAppointment')
      .then(response => {
        setAppointments(response.data.data);
        setFilteredAppointments(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching appointments:', error);
      });
  }, []);

  useEffect(() => {
    const results = appointments.filter(appointment =>
      appointment.Petients.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.id.toString().includes(searchTerm)
    );
    setFilteredAppointments(results);
  }, [searchTerm, appointments]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <div className="flex justify-center max-w-screen-2xl mx-auto">
        <h2 className="text-2xl text-black mb-1 font-bold mt-5">Appointment Reports</h2>
      </div>
      <div className="bg-white opacity-70 p-6 rounded-lg shadow-md max-w-screen-2xl mx-auto">
        <div className="mb-4 flex justify-center space-x-2">
          <input
            type="text"
            placeholder="Search Patient Name or ID"
            className="w-2/5 p-2 border rounded-xl"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b text-left">ID</th>
                <th className="py-2 px-4 border-b text-left">Patient Name</th>
                <th className="py-2 px-4 border-b text-left">Doctor Name</th>
                <th className="py-2 px-4 border-b text-left">Appointment Date</th>
                <th className="py-2 px-4 border-b text-left">Appointment Type</th>
                <th className="py-2 px-4 border-b text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredAppointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td className="py-2 px-4 border-b">{appointment.id}</td>
                  <td className="py-2 px-4 border-b">{appointment.Petients.fullName}</td>
                  <td className="py-2 px-4 border-b">{appointment.Staff.fullName}</td>
                  <td className="py-2 px-4 border-b">{new Date(appointment.appointment_date).toLocaleString()}</td>
                  <td className="py-2 px-4 border-b">{appointment.appointment_type}</td>
                  <td className="py-2 px-4 border-b">{appointment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}