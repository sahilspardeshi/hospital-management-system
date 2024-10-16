import React from "react";
// import notification from '../IMAGE/notifications_none.png';
// import darkmode from '../IMAGE/moon-solid 1.png';
// import about from '../IMAGE/info_outline.png';
import Doctor from '../../assets/images/d1.png';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-gray-50 w-full pl-20 fixed -mt-10">
      <div>
        <h1 className="text-2xl font-bold pl-48">
          Welcome, <span className="text-red-600 ">Dr. Robert Harry</span>
        </h1>
      </div>
      <nav className="flex items-center space-x-4">
        <li className="p-4 hover:bg-gray-100 cursor-pointer hidden md:block rounded-full bg-gray-200 text-sm">
          IPD
        </li>
        <li className="p-4 hover:bg-gray-100 cursor-pointer hidden md:block rounded-full bg-gray-200 text-sm">
          OPD
        </li>

        <input
          type="text"
          placeholder="Search"
          className="bg-gray-200 rounded-full px-4 py-2 outline-none text-xl hidden md:block"
        />

        {/* <img src={notification} alt="Notification Bell" className="w-8 h-8 cursor-pointer" />
        <img src={darkmode} alt="Dark Mode Toggle" className="w-8 h-8 cursor-pointer" />
        <img src={about} alt="Information" className="w-8 h-8 cursor-pointer" /> */}

        <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
          <img src={Doctor} alt="Doctor Avatar" className="rounded-full" />
        </div>
      </nav>
    </header>
  );
};

export default Header;