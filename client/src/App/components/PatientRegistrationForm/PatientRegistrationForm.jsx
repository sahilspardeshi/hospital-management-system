

import React, { useState } from 'react'
import { Upload } from 'lucide-react'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../SideBar/Sidebar"

export default function PatientRegistrationForm() {
  const [formData, setFormData] = useState({
    patientName: '',
    age: '',
    address: '',
    state: '',
    district: '',
    pinCode: '',
    mobileNo: '',
    alternateMobileNo: '',
    identityType: '',
    identityNumber: '',
    emergencyName: '',
    emergencyMobile: '',
    emergencyRelation: '',
    emergencyAlternateMobile: '',
    emergencyAddress: '',
    insuranceIssuer: '',
    insuranceNumber: '',
    insuranceEndDate: '',
    insuranceMaturityAmount: '',
  })

  const [file, setFile] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Data:', formData)
    console.log('File:', file)
    
    // Reset form after submission
    setFormData({
      patientName: '',
      age: '',
      address: '',
      state: '',
      district: '',
      pinCode: '',
      mobileNo: '',
      alternateMobileNo: '',
      identityType: '',
      identityNumber: '',
      emergencyName: '',
      emergencyMobile: '',
      emergencyRelation: '',
      emergencyAlternateMobile: '',
      emergencyAddress: '',
      insuranceIssuer: '',
      insuranceNumber: '',
      insuranceEndDate: '',
      insuranceMaturityAmount: '',
    })
    setFile(null)
    alert('Form submitted successfully! Check console for details.')
  }

  return (
    <div className="min-h-screen bg-custom-gradient flex">
      <div className="bg-[#F8F7F7] bg-opacity-70 shadow-lg rounded-xl border border-gray-200 w-full max-w-full max-h-full overflow-hidden flex flex-row justify-start items-start mx-5 my-5 px-5 py-5">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          <div className="flex-1 overflow-y-auto px-20 mt-10 rounded-lg m-4">
            <h1 className="text-2xl font-bold text-center mb-6 ">Patient Registration</h1>
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
                    <label htmlFor="alternateMobileNo" className="block mb-1 text-sm font-medium">Alternate mobile no</label>
                    <input
                      type="tel"
                      id="alternateMobileNo"
                      name="alternateMobileNo"
                      value={formData.alternateMobileNo}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter alternate mobile no"
                    />
                  </div>
                  <div>
                    <label htmlFor="identityType" className="block mb-1 text-sm font-medium">Select Identity type</label>
                    <select
                      id="identityType"
                      name="identityType"
                      value={formData.identityType}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      required
                    >
                      <option value="">Select Identity</option>
                      <option value="aadhar">Aadhar Card</option>
                      <option value="pan">PAN Card</option>
                      <option value="drivingLicense">Driving License</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="identityNumber" className="block mb-1 text-sm font-medium">Enter Identity number</label>
                    <input
                      type="text"
                      id="identityNumber"
                      name="identityNumber"
                      value={formData.identityNumber}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter identity number"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-4 bg-[#E4D7D7] p-2">Emergency contact:</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="emergencyName" className="block mb-1 text-sm font-medium">Name</label>
                    <input
                      type="text"
                      id="emergencyName"
                      name="emergencyName"
                      value={formData.emergencyName}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="emergencyMobile" className="block mb-1 text-sm font-medium">Mobile no</label>
                    <input
                      type="tel"
                      id="emergencyMobile"
                      name="emergencyMobile"
                      value={formData.emergencyMobile}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter Mobile no"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="emergencyRelation" className="block mb-1 text-sm font-medium">Relation</label>
                    <input
                      type="text"
                      id="emergencyRelation"
                      name="emergencyRelation"
                      value={formData.emergencyRelation}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter relation with patient"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="emergencyAlternateMobile" className="block mb-1 text-sm font-medium">Alternate mobile number</label>
                    <input
                      type="tel"
                      id="emergencyAlternateMobile"
                      name="emergencyAlternateMobile"
                      value={formData.emergencyAlternateMobile}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter alternate mobile number"
                    />
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="emergencyAddress" className="block mb-1 text-sm font-medium">Address</label>
                    <textarea
                      id="emergencyAddress"
                      name="emergencyAddress"
                      value={formData.emergencyAddress}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter full address"
                      rows={3}
                      required
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-4 bg-[#E4D7D7] p-2">Insurance details (if applicable)</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="insuranceIssuer" className="block mb-1 text-sm font-medium">Insurance issuer/ company name</label>
                    <input
                      type="text"
                      id="insuranceIssuer"
                      name="insuranceIssuer"
                      value={formData.insuranceIssuer}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="insuranceNumber" className="block mb-1 text-sm font-medium">Enter Insurance number/Policy number</label>
                    <input
                      type="text"
                      id="insuranceNumber"
                      name="insuranceNumber"
                      value={formData.insuranceNumber}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter policy number"
                    />
                  </div>
                  <div>
                    <label htmlFor="insuranceEndDate" className="block mb-1 text-sm font-medium">End date</label>
                    <input
                      type="date"
                      id="insuranceEndDate"
                      name="insuranceEndDate"
                      value={formData.insuranceEndDate}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label htmlFor="insuranceMaturityAmount" className="block mb-1 text-sm font-medium">Enter maturity amount</label>
                    <input
                      type="text"
                      id="insuranceMaturityAmount"
                      name="insuranceMaturityAmount"
                      value={formData.insuranceMaturityAmount}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter full maturity amount"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6 ">
                <h2 className="text-lg font-semibold mb-4">Upload consent form</h2>
                <div className="border-2 border-dashed border-gray-300 bg-white rounded-lg p-4 py-14 text-center w-3/4 m-auto ">
                  <input
                    type="file"
                    id="consentForm"
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".jpg,.png,.pdf,.xlsx"
                  />
                  <label htmlFor="consentForm" className="cursor-pointer">
                    <Upload className="mx-auto mb-2" size={24} />
                    <p>Choose a file or drag & drop it here</p>
                    <p className="text-sm text-gray-500">JPEG, PNG, PDF, and Excel formats, up to 50MB</p>
                  </label>
                  {file && <p className="mt-2 text-sm text-gray-600">Selected file: {file.name}</p>}

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
        </div>
      </div>
    </div>
  )
}