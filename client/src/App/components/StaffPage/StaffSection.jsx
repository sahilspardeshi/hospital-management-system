import React, { useState } from 'react';

const StaffSection = () => {
  const [formData, setFormData] = useState({
    staffId: '',
    fullName: '',
    user: '',
    specialization: '',
    type: '',
    contactNo: '',
    email: '',
    qualifications: '',
    department: '',
    createdAt: '',
    updatedAt: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-col justify-center items-center h-[82vh] w-full  pl-20">
      <div className="w-full max-w-7xl mx-auto  pl-20">
        <h2 className="text-3xl font-bold mb-4 bg-gray-200 p-5">Staff Section</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-lg font-bold text-gray-700">Staff ID</label>
              <input
                placeholder="Enter"
                type="text"
                name="staffId"
                value={formData.staffId}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              />
            </div>
            <div>
              <label className="block text-lg font-bold text-gray-700">Full Name</label>
              <input
                placeholder="Enter"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              />
            </div>
            <div>
              <label className="block text-lg font-bold text-gray-700">User</label>
              <input
                placeholder="Enter"
                type="text"
                name="user"
                value={formData.user}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              />
            </div>
            <div>
              <label className="block text-lg font-bold text-gray-700">Specialization</label>
              <input
                placeholder="Enter"
                type="text"
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              />
            </div>
            <div>
              <label className="block text-lg font-bold text-gray-700">Type</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              >
                <option value="">Select</option>
                <option value="Permanent">Permanent</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>
            <div>
              <label className="block text-lg font-bold text-gray-700">Contact No</label>
              <input
                placeholder="Enter"
                type="text"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              />
            </div>
            <div>
              <label className="block text-lg font-bold text-gray-700">Email</label>
              <input
                placeholder="Enter"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              />
            </div>
            <div>
              <label className="block text-lg font-bold text-gray-700">Qualifications</label>
              <select
                name="qualifications"
                value={formData.qualifications}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              >
                <option value="">Select</option>
                <option value="MBBS">MBBS</option>
                <option value="MD">MD</option>
                <option value="Nurse">Nurse</option>
              </select>
            </div>
            <div>
              <label className="block text-lg font-bold text-gray-700">Department</label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              >
                <option value="">Select</option>
                <option value="OPD">OPD</option>
                <option value="IPD">IPD</option>
                <option value="Surgery">Surgery</option>
              </select>
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-lg font-bold text-gray-700">Created At</label>
                <input
                  type="date"
                  name="createdAt"
                  value={formData.createdAt}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded w-full"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-lg font-bold text-gray-700">Updated At</label>
                <input
                  type="date"
                  name="updatedAt"
                  value={formData.updatedAt}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded w-full"
                />
              </div>
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StaffSection;
