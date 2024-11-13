import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerPatient } from '../../redux/actions/patientActions'; // Adjust the path
import { Upload } from 'lucide-react';

const Profile = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    age: '',
    address: '',
    state: '',
    district: '',
    pinCode: '',
    mobileNo: '',
    gender: '',
    blood_group:'',
    email: '',


  });

  const [file, setFile] = useState(null);
  const dispatch = useDispatch(); // Use dispatch from redux

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Dispatch the action with form data and a callback
    dispatch(registerPatient(formData, (data) => {
      // Show alert and log response data
      alert('Form submitted successfully!');
      console.log('Patient data:', data);
  
      // Reset form data if needed
      setFormData({
        patientName: '',
        age: '',
        address: '',
        state: '',
        district: '',
        pinCode: '',
        mobileNo: '',
        gender: '',
        blood_group:'',
        email: '',
      });
    }));
  };
  
  return (

          <div className="flex-1 overflow-y-auto px-20 mt-10 rounded-lg m-4">
            <h1 className="text-2xl font-bold text-center mb-6 ">Profile Creation</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-4 bg-[#E4D7D7] p-2">Basic Information:</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="patientName" className="block mb-1 text-sm font-medium">Patient Name</label>
                    <input
                      type="text"
                      id="patientName"
                      name="patientName"
                      value={formData.patientName}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter Patient name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="age" className="block mb-1 text-sm font-medium">Age</label>
                    <input
                      type="text"
                      id="age"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter Patient's age"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="address" className="block mb-1 text-sm font-medium">Address</label>
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter Patient's address"
                      rows={3}
                      required
                    ></textarea>
                  </div>
                </div>
                <div className='grid grid-cols-3 gap-3 mt-4'>
                  <div>
                    <label htmlFor="state" className="block mb-1 text-sm font-medium">State</label>
                    <select
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      required
                    >
                      <option value="">Select State</option>
                      <option value="state1">State 1</option>
                      <option value="state2">State 2</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="district" className="block mb-1 text-sm font-medium">District</label>
                    <select
                      id="district"
                      name="district"
                      value={formData.district}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      required
                    >
                      <option value="">Select District</option>
                      <option value="district1">District 1</option>
                      <option value="district2">District 2</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="pinCode" className="block mb-1 text-sm font-medium">Pin code</label>
                    <input
                      type="text"
                      id="pinCode"
                      name="pinCode"
                      value={formData.pinCode}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter pin code"
                      required
                    />
                  </div>
                </div>
                <div className='grid grid-cols-2 gap-4 mt-4'>
                  <div>
                    <label htmlFor="mobileNo" className="block mb-1 text-sm font-medium">Mobile no</label>
                    <input
                      type="tel"
                      id="mobileNo"
                      name="mobileNo"
                      value={formData.mobileNo}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter mobile no"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="gender" className="block mb-1 text-sm font-medium">Select gender type</label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      required
                    >
                      <option value="">Select gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-1 text-sm font-medium">Enter email number</label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter email"
                    />
                  </div>
                  <div>
                    <label htmlFor="blood_group" className="block mb-1 text-sm font-medium">Enter blood group</label>
                    <input
                      type="text"
                      id="blood_group"
                      name="blood_group"
                      value={formData.blood_group}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter blood_group "
                      required
                    />
                  </div>
                </div>
                
              </div>


              <div className="text-center">
                <button 
                  type="submit" 
                  className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
  )
}
export default Profile