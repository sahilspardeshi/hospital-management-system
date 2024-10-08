
import React from 'react';
import { useNavigate } from 'react-router-dom';
import back from '../assets/back.jpg';
import logo from '../assets/logo.png';
import facebook from '../assets/facebook.png';
import google from '../assets/google.png';


const CreateAccount = () => {
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault(); 
    navigate('/next');
  };

  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="  absolute inset-0 overflow-hidden">
        <img 
          src={back} 
          alt="Background" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      {/* Front Part */}
      <div className="absolute inset-0 flex items-center justify-center w-full h-auto">

        <div className="border  bg-orange-600 w-11/12 lg:w-3/5 flex rounded-lg shadow-lg overflow-hidden">
          {/* Left side with dark orange gradient */}
          <div className="hidden lg:block h-full  w-2/6 bg-orange-600 rounded-l-lg relative">
  <img src={logo} alt="Logo" className="absolute top-4 left-4" />
</div>

          
          {/* Right side */}
          <div className="relative w-full lg:w-4/6 flex  bg-white flex-col justify-between p-4">
            <div className="m-3 text-lg font-bold text-center">Create Account</div>
            <div className="button flex flex-col lg:flex-row w-full mb-4">
              <button className="flex bg-white active:scale-95 active:bg-gray-400 h-8 mb-2 lg:mb-0 lg:mr-2 w-full lg:w-auto justify-center items-center">
                <img src={google} alt="Google" className="w-5 h-3 lg:w-8 lg:h-5 mr-2" />
                Continue with Google
              </button>
              <button className="flex bg-white active:scale-95 active:bg-gray-400 h-8 w-full lg:w-auto justify-center items-center">
                <img src={facebook} alt="Facebook" className="w-6 h-5 mr-2" />
                Continue with Facebook
              </button>
            </div>
            <div className="flex items-center justify-center my-2">
              <span className="text-gray-500">- OR -</span>
            </div>
            <form onSubmit={handleNext} className="w-full">
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-2 py-1 border-b border-gray-600 focus:outline-none"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Phone No"
                  className="w-full px-2 py-1 border-b border-gray-600 focus:outline-none"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-2 py-1 border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Hospital Name"
                  className="w-full px-2 py-1 border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="mb-3 flex flex-col lg:flex-row">
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full lg:w-1/2 mr-0 lg:mr-2 px-3 py-1 border-b border-gray-500 focus:outline-none"
                />
                <input
                  type="date"
                  className="w-full lg:w-1/2 mt-2 lg:mt-0 lg:ml-2 px-3 py-1 border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex justify-end">
                <button type="submit" className="w-full lg:w-1/4 bg-green-600 text-white py-1.5 rounded-lg text-xs lg:text-base hover:bg-green-700">
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;

