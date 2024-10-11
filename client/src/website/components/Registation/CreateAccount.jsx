import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import back from "../../assets/images/back.jpg";
import logo from "../../assets/images/logo.png";

import google from "../../assets/images/google.png";

const CreateAccount = ({ close, isOpen,onSuccess }) => { // Removed unused onSubmit prop
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
   
    close();
    onSuccess(); // Close the modal after navigation
  };

  // Close modal on Esc key press
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        close();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      // Disable background scrolling
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, close]);

  // Close modal when clicking outside the modal content
  const handleBackdropClick = (e) => {
    if (e.target.id === "modalBackdrop") {
      close();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      id="modalBackdrop" 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" 
      onClick={handleBackdropClick}
    >
      {/* Front Part */}
      <div className="border bg-orange-600 w-11/12 lg:w-3/5 flex rounded-lg shadow-lg overflow-hidden">
        {/* Left side with dark orange gradient */}
        <div className="hidden lg:block h-full w-2/6 bg-gradient-to-b from-orange-600 to-orange-500 rounded-l-lg relative">
          <img src={logo} alt="Logo" className="absolute top-4 left-4 w-20" />
        </div>

        {/* Right side */}
        <div className="relative w-full lg:w-4/6 flex bg-white flex-col justify-between p-6">
          <div className="m-3 pb-4 text-2xl font-bold text-center">
            Create Account
          </div>
          <div className="button flex flex-col lg:flex-row w-full mb-4 gap-2">
            <button className="px-3 py-3  hover:brightness-110 flex bg-white active:scale-95 active:bg-gray-400 h-10 lg:h-10 w-full lg:w-auto justify-center items-center border border-gray-300 rounded-lg">
              <img
                src={google}
                alt="Google"
                className="w-auto h-5 lg:h-6 mr-2 object-contain"
              />
              Continue with Google
            </button>
            
          </div>
          <div className="flex items-center justify-center my-2">
            <span className="text-gray-500">- OR -</span>
          </div>
          <form onSubmit={handleNext} className="w-full">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Full Name"

                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                placeholder="Phone No"

                pattern="[0-9]{10}"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email Address"

                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Hospital Name"

                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="mb-4 flex flex-col lg:flex-row gap-4">
              <input
                type="text"
                placeholder="Address"

                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="date"

                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="text-sm text-center mt-4">
  <span className="text-gray-600">Already have an account?</span>
  <a href="/login" className="text-blue-500 w-1/2 pt-3  hover:text-blue-700 font-semibold ml-1">
    Login 
  </a>
</div>
            <div className="flex justify-end">
              <button
             
                type="submit"
                className="w-full lg:w-1/4 bg-green-600 text-white py-2 rounded-lg text-base hover:bg-green-400 transition duration-200 "
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
