import React from "react";
import notification from '../../assets/images/notifications_none.png';
import darkmode from '../../assets/images/moon-solid_1.png';
import about from '../../assets/images/info_outline.png';
import Doctor from '../../assets/images/dr.png';

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-10 mx-2 w-full rounded-t-lg   ">
      {/* Welcome Message */}
<<<<<<< HEAD
      <h1 className="text-xl font-bold mx-8">
=======
      <h1 className="text-xl font-semibold mx-6">
>>>>>>> features/patientController
        Welcome, <span className="text-red-500">Dr. Robert Harry</span>
      </h1>

      {/* OPD and IPD Section */}
      <div className="flex items-center space-x-4">
        <button className="px-5 py-2 bg-white  hover:bg-green-300 hover:text-white font-semibold text-sm rounded-full">OPD</button>
        <button className="px-5 py-2 bg-white  hover:bg-green-300 hover:text-white font-semibold  text-sm rounded-full">IPD</button>
      </div>

      {/* Search and Icons */}
      <div className="flex items-center space-x-4 bg-white p-2 rounded-full">
        <input
          type="text"
          placeholder="Search"
          className="px-3 py-2 bg-gray-200 rounded-full hidden md:block"
        />
        <img src={notification} alt="Notification Bell" className="w-6 h-6 cursor-pointer" />
        <img src={darkmode} alt="Dark Mode Toggle" className="w-5 h-5 cursor-pointer" />
        <img src={about} alt="Information" className="w-6 h-6 cursor-pointer" />
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img src={Doctor} alt="Doctor Avatar" className="w-full h-full" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
