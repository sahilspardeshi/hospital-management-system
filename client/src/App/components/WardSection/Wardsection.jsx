import React, { useState } from 'react';

const WardSection = () => {
  const [formData, setFormData] = useState({
    patientId: '',
    admissionId: '',
    dayItemId: '',
    treatmentId: '',
    transferDate: '',
    transferTime: '',
    wardNo: '',
    bedNo: '',
    roomNo: '',
    createdAt: '',
    updatedAt: '',
    transferReason: '',
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
    <div className="flex flex-col justify-center items-center h-[80vh] w-full  pl-20">
      <div className="w-full max-w-6xl mx-auto  pl-20">
        <h2 className="text-3xl font-bold mb-4 bg-gray-200 p-5 ">Ward Section</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-lg font-bold text-gray-700">Patient ID</label>
              <input
               placeholder='Enter'
                type="text"
                name="patientId"
                value={formData.patientId}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              />
            </div>
            <div>
              <label className="block  text-lg font-bold text-gray-700">Admission ID</label>
              <input
                            placeholder='Enter'

                type="text"
                name="admissionId"
                value={formData.admissionId}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              />
            </div>
            <div>
              <label className="block  text-lg font-bold text-gray-700">DayItem ID</label>
              <input
                type="text"
                name="dayItemId"
                value={formData.dayItemId}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              />
            </div>
            <div>
              <label className="block text-lg font-bold text-gray-700">Treatment ID</label>
              <input
                type="text"
                name="treatmentId"
                value={formData.treatmentId}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              />
            </div>
            <div>
              <label className="block  text-lg font-bold text-gray-700">Transfer Date</label>
              <input
                type="date"
                name="transferDate"
                value={formData.transferDate}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              />
            </div>
            <div>
              <label className="block  text-lg font-bold text-gray-700">Transfer Time</label>
              <input
                type="time"
                name="transferTime"
                value={formData.transferTime}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              />
            </div>
            <div>
              <label className="block  text-lg font-bold text-gray-700">Ward No</label>
              <select
                name="wardNo"
                value={formData.wardNo}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              >
                <option value="">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>

              </select>
            </div>
            <div>
              <label className="block  text-lg font-bold text-gray-700">Room No</label>
              <select
                name="roomNo"
                value={formData.roomNo}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              >
                <option value="">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div>
              <label className="block  text-lg font-bold text-gray-700">Bed No</label>
              <select
                name="bedNo"
                value={formData.bedNo}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              >
                <option value="">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block  text-lg font-bold  text-gray-700">Created At</label>
                <input
                  type="date"
                  name="createdAt"
                  value={formData.createdAt}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded w-full"
                />
              </div>
              <div className="w-1/2">
                <label className="block  text-lg font-bold text-gray-700">Updated At</label>
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
          <div>
            <label className="block  text-lg font-bold text-gray-700">Transfer Reason</label>
            <textarea
              placeholder='Enter'
              name="transferReason"
              value={formData.transferReason}
              onChange={handleChange}
              className="mt-1 p-2 border rounded w-full"
            />
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

export default WardSection;
