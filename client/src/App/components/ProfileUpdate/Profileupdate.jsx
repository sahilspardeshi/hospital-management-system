import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';


const Profileupdate = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div className="max-h-screen bg-custom-gradient flex">
    <div className="bg-[#F8F7F7] bg-opacity-70 shadow-lg rounded-xl border border-gray-200 w-full max-w-full max-h-full flex flex-row justify-start items-start mx-5 my-5 px-5 py-5">
     
    <div className="max-w-md mx-auto mt-5 w-[80%] p-6 bg-white rounded-lg shadow-md border border-blue-200">
      <h1 className="text-2xl font-semibold text-center mb-6">Update Profile</h1>
      
      <div className="mb-6">
        <div className="w-24 h-24 mx-auto bg-gray-200 rounded-lg flex items-center justify-center">
          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
        </div>
        <p className="text-xs text-center mt-2 text-gray-600">Please upload Hospital Logo, size less than 100KB</p>
        <div className="flex justify-center mt-2">
          <label className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 cursor-pointer">
            Choose File
            <input type="file" className="hidden" onChange={handleFileChange} accept="image/*" />
          </label>
          <span className="ml-2 py-2 text-sm text-gray-600">
            {file ? file.name : 'No File Chosen'}
          </span>
        </div>
      </div>
      
      <form className="space-y-4">
        <div>
          <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" type="text" placeholder="Domain Name" />
        </div>
        <div>
          <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" type="text" placeholder="Hospital Name" />
        </div>
        <div>
          <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" type="text" placeholder="ID" />
        </div>
        <div className="relative">
          <input 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" 
            type={showPassword ? "text" : "password"} 
            placeholder="Password" 
          />
          <button 
            type="button" 
            className="absolute inset-y-0 right-0 flex items-center px-2" 
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff className="h-5 w-5 text-gray-500" /> : <Eye className="h-5 w-5 text-gray-500" />}
          </button>
        </div>
        <div className="relative">
          <input 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" 
            type={showConfirmPassword ? "text" : "password"} 
            placeholder="Confirm Password" 
          />
          <button 
            type="button" 
            className="absolute inset-y-0 right-0 flex items-center px-2" 
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <EyeOff className="h-5 w-5 text-gray-500" /> : <Eye className="h-5 w-5 text-gray-500" />}
          </button>
        </div>
        <div className="flex items-center justify-center">
          <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" type="button">
            Save
          </button>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
};

export default Profileupdate;