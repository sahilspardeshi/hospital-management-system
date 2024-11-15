import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NewMedicationForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: '',
    patientMedicationId: '',
    surgeryRecordsId: '',
    doctorName: '',
    startDate: '',
    endDate: '',
    treatmentType: '',
    totalQuantity: '',
    reportDescription: '',
    cost: '',
    paid: ''
  });
  const [doctorSuggestions, setDoctorSuggestions] = useState([]);
  const [showDoctorSuggestions, setShowDoctorSuggestions] = useState(false);

  // Fetch doctor suggestions
  const fetchDoctorSuggestions = async (query) => {
    if (!query) {
      setDoctorSuggestions([]);
      setShowDoctorSuggestions(false);
      return;
    }

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
      console.log(data);
      setDoctorSuggestions(data.map(doctor => doctor.fullName));
      setShowDoctorSuggestions(true);
    } catch (error) {
      console.error('Error fetching doctor suggestions:', error);
    }
  };

  const handleDoctorChange = (e) => {
    const { value } = e.target;
    setFormData(prevData => ({ ...prevData, doctorName: value }));
    fetchDoctorSuggestions(value);
  };

  const handleSelectDoctor = (doctor) => {
    setFormData(prevData => ({ ...prevData, doctorName: doctor }));
    setDoctorSuggestions([]);
    setShowDoctorSuggestions(false);
  };

  const renderDoctorSuggestions = () => (
    <ul className="absolute bg-white border border-gray-300 mt-1 rounded-lg shadow-lg z-10">
      {doctorSuggestions.map((suggestion, index) => (
        <li
          key={index}
          className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
          onMouseDown={() => handleSelectDoctor(suggestion)}
        >
          {suggestion}
        </li>
      ))}
    </ul>
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    console.log("working");
    e.preventDefault();

    // Make the POST request to save the form data
    try {
        const response = await fetch(`http://localhost:4000/software/api/mainmedication/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        console.log(data);

        if (!response.ok) {
            throw new Error('Failed to save medication data');
        }

        console.log(response);

        // Navigate to the medication-details page on success
        const pathSegments = window.location.pathname.split('/');
        pathSegments[pathSegments.length - 1] = `medication-details`;
        const newPath = pathSegments.join('/');
        console.log("came here")
        navigate(newPath,{state:{medicationData:data}});
    } catch (error) {
        console.error('Error submitting medication data:', error);
    }
  };

  return (
    <>
      <div className="bg-rose-100 h-3 flex justify-between items-center max-w-screen-2xl mx-auto p-4">
        <h1 className="text-lg font-bold text-gray-800 border-b pb-0">New Medication</h1>
      </div>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <label htmlFor="PatientMedication_id" className="block text-gray-700 mb-2 font-bold">
              Patient Medication Id
            </label>
            <input
              type="text"
              name="PatientMedication_id"
              id="PatientMedication_id"
              placeholder="Patient Medication Id"
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="SurgeryRecords_id" className="block text-gray-700 mb-2 font-bold">
              Surgery Records Id
            </label>
            <input
              type="text"
              name="SurgeryRecords_id"
              id="SurgeryRecords_id"
              placeholder="Surgery Record Id"
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="col-span-1 relative">
            <label htmlFor="doctorName" className="block text-gray-700 mb-2 font-bold">
              Doctor Name
            </label>
            <input
              type="text"
              name="doctorName"
              id="doctorName"
              placeholder="Doctor Name"
              value={formData.doctorName}
              onChange={handleDoctorChange}
              onFocus={() => setShowDoctorSuggestions(true)}
              onBlur={() => setShowDoctorSuggestions(false)}
              className="p-3 border border-gray-300 rounded-md w-full"
            />
            {showDoctorSuggestions && renderDoctorSuggestions()}
          </div>
          <div className="col-span-1">
            <label htmlFor="start_date" className="block text-gray-700 mb-2 font-bold">
              Start Date
            </label>
            <input
              type="date"
              name="start_date"
              id="start_date"
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="end_date" className="block text-gray-700 mb-2 font-bold">
              End Date
            </label>
            <input
              type="date"
              name="end_date"
              id="end_date"
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="treatment_type" className="block text-gray-700 mb-2 font-bold">
              Treatment Type
            </label>
            <select
              name="treatment_type"
              id="treatment_type"
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
            >
              <option value="">Select Treatment Type</option>
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
            </select>
          </div>
          <div className="col-span-1">
            <label htmlFor="total_quantity" className="block text-gray-700 mb-2 font-bold">
              Total Quantity
            </label>
            <select
              name="total_quantity"
              id="total_quantity"
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
            <label htmlFor="description" className="block text-gray-700 mb-2 font-bold">
              Report Description
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="Report description"
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
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
            />
          </div>
        </div>
        <div className="col-span-3 flex justify-center">
          <button type="submit" className="mt-4 bg-green-600 text-white px-6 py-3 rounded-md ">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

