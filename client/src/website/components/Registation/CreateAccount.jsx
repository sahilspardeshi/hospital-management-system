import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import google from "../../assets/images/google.png";
import axiosInstanceWeb from "../../axiosConfig";

const CreateAccount = ({ close, isOpen, onSuccess }) => {
  const navigate = useNavigate();
  
  // State to manage form inputs
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    hospitalName: "",
    address: "",
    dateOfBirth: "",
    password: "",
    confirmPassword: ""
  });

  // State to manage error for password mismatch
  const [passwordError, setPasswordError] = useState("");

  // Handle form input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleNext = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    try {
      // Send data to the backend API
      const response = await axiosInstanceWeb.post('/marketing/create', formData);
      console.log(response.data);
      setFormData({});
      alert("create account successfull")
      // If successful, close the modal and navigate
      onSuccess();
    } catch (error) {
    alert("Error registering account:", error);
    }
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
            <button className="px-3 py-3 hover:brightness-110 flex bg-white active:scale-95 active:bg-gray-400 h-10 lg:h-10 w-full lg:w-auto justify-center items-center border border-gray-300 rounded-lg">
              <img src={google} alt="Google" className="w-auto h-5 lg:h-6 mr-2 object-contain" />
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
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone No"
                value={formData.phone}
                pattern="[0-9]{10}"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="hospitalName"
                placeholder="Hospital Name"
                value={formData.hospitalName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <div className="mb-4 flex flex-col lg:flex-row gap-4">
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            
            {/* Confirm Password Input */}
            <div className="mb-4">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            
            {/* Show password error if passwords do not match */}
            {passwordError && (
              <div className="mb-4 text-red-500 text-sm">{passwordError}</div>
            )}
            
            <div className="text-sm text-center mt-4">
              <span className="text-gray-600">Already have an account?</span>
              <a href="/login" className="text-blue-500 w-1/2 pt-3 hover:text-blue-700 font-semibold ml-1">Login</a>
            </div>
            <div className="flex justify-end">
              <button type="submit" className="w-full lg:w-1/4 bg-green-600 text-white py-2 rounded-lg text-base hover:bg-green-400 transition duration-200">
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
