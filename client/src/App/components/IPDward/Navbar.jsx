import React from "react";
import notification from '../IMAGE/notifications_none.png';
import darkmode from '../IMAGE/moon-solid 1.png';
import about from '../IMAGE/info_outline.png';
import Doctor from '../IMAGE/dr.png';

const Header = () => {
  return (
    <header className="flex w-full">
      {/* Left empty space (20%) */}
      <div className="w-1/5"></div>

      {/* Content (80%) */}
      <div className="w-4/5 flex justify-between items-center p-4  pt-5">
        <div className="flex items-center">
          {/* Dashboard Logo and Menu */}

          <h1 className="text-xl font-bold pl-10">
            Welcome, <span className="text-orange-600">Dr. Robert Harry</span>
          </h1>
        </div>

        {/* OPD and IPD section */}
        <ul className="flex space-x-4">
          <li className="pl-5 pr-5 p-3 hover:bg-green-500 cursor-pointer rounded-full bg-green-200 text-sm">
            OPD
          </li>
          <li className="pl-5 pr-5 p-3 hover:bg-green-500 cursor-pointer rounded-full bg-gray-300 text-sm">
            IPD
          </li>
        </ul>

        {/* Right section: Search bar and icons */}
        <nav className="flex items-center space-x-6 bg-white rounded-xl p-2">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-200 rounded-full px-4 py-2 outline-none text-lg hidden md:block"
          />
          <img src={notification} alt="Notification Bell" className="w-6 h-6 cursor-pointer" />
          <img src={darkmode} alt="Dark Mode Toggle" className="w-6 h-6 cursor-pointer" />
          <img src={about} alt="Information" className="w-6 h-6 cursor-pointer" />
          
          {/* Doctor Avatar */}
          <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
            <img src={Doctor} alt="Doctor Avatar" className="rounded-full w-8 h-8" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
