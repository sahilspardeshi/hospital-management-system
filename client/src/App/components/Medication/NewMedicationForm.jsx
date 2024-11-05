// Medication 2nd page code
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//2
// Mock data to simulate backend response
const mockBackendData = {
  id: 'FLFL-81265',
  patientMedicationId: 'LGAH28PGJ',
  surgeryRecordsId: 'W34P6FYTHBUO',
  doctorId: 'lgmrman',
  startDate: '2023-10-25',
  endDate: '2023-10-25',
  treatmentType: 'type1',
  totalQuantity: '2',
  reportDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl.',
  cost: '549684',
  paid: '21541'
};

export default function NewMedicationForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: '',
    patientMedicationId: '',
    surgeryRecordsId: '',
    doctorId: '',
    startDate: '',
    endDate: '',
    treatmentType: '',
    totalQuantity: '',
    reportDescription: '',
    cost: '',
    paid: ''
  });

  // Simulate fetching data from backend
  useEffect(() => {
    // In a real application, this would be an API call
    const fetchData = async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFormData(mockBackendData);
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const pathSegments = window.location.pathname.split('/');
    pathSegments[pathSegments.length - 1] = `medication-details`;
    const newPath = pathSegments.join('/');
   console.log(newPath);
   navigate(newPath);

  };

  return (
    <>
      <div className="bg-rose-100 h-3 flex justify-between items-center max-w-screen-2xl mx-auto p-4">
        <h1 className="text-lg font-bold text-gray-800 border-b pb-0">New Medication</h1>
      </div>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <label htmlFor="id" className="block text-gray-700 mb-2 font-bold">
              Id
            </label>
            <input
              type="text"
              name="id"
              id="id"
              placeholder="Id"
              value={formData.id}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="patientMedicationId" className="block text-gray-700 mb-2 font-bold">
              Patient Medication Id
            </label>
            <input
              type="text"
              name="patientMedicationId"
              id="patientMedicationId"
              value={formData.patientMedicationId}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="surgeryRecordsId" className="block text-gray-700 mb-2 font-bold">
              Surgery Records Id
            </label>
            <input
              type="text"
              name="surgeryRecordsId"
              id="surgeryRecordsId"
              value={formData.surgeryRecordsId}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="doctorId" className="block text-gray-700 mb-2 font-bold">
              Doctor Id
            </label>
            <input
              type="text"
              name="doctorId"
              id="doctorId"
              value={formData.doctorId}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="startDate" className="block text-gray-700 mb-2 font-bold">
              Start Date
            </label>
            <input
              type="date"
              name="startDate"
              id="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="endDate" className="block text-gray-700 mb-2 font-bold">
              End Date
            </label>
            <input
              type="date"
              name="endDate"
              id="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="treatmentType" className="block text-gray-700 mb-2 font-bold">
              Treatment Type
            </label>
            <select
              name="treatmentType"
              id="treatmentType"
              value={formData.treatmentType}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
            >
              <option value="">Select Treatment Type</option>
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
            </select>
          </div>
          <div className="col-span-1">
            <label htmlFor="totalQuantity" className="block text-gray-700 mb-2 font-bold">
              Total Quantity
            </label>
            <select
              name="totalQuantity"
              id="totalQuantity"
              value={formData.totalQuantity}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
            >
              <option value="">Select Total Quantity</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="col-span-3">
            <label htmlFor="reportDescription" className="block text-gray-700 mb-2 font-bold">
              Report Description
            </label>
            <textarea
              name="reportDescription"
              id="reportDescription"
              placeholder="Report description"
              value={formData.reportDescription}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
              rows={4}
            ></textarea>
          </div>
          <div className="col-span-1">
            <label htmlFor="cost" className="block text-gray-700 mb-2 font-bold">
              Cost
            </label>
            <input
              type="number"
              name="cost"
              id="cost"
              placeholder="Cost"
              value={formData.cost}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="paid" className="block text-gray-700 mb-2 font-bold">
              Paid
            </label>
            <input
              type="number"
              name="paid"
              id="paid"
              placeholder="Paid"
              value={formData.paid}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
            />
          </div>
        </div>
        <div className="col-span-3 flex justify-center">
          <button type="submit" className="mt-4 bg-green-600 text-white px-6 py-3 rounded-md">
            Next
          </button>
        </div>
      </form>
    </>
  );
}