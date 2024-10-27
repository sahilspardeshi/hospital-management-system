import React from "react";
import Sidebar from "../components/SideBar/Sidebar";

import Dashboard from "../components/Patient/Patient";
import Navbar from "../components/NavBar/Navbar";



const IPD = () => {
  return (

    <div className="min-h-screen bg-custom-gradient flex">
      {/* Sidebar */}
      <div className="bg-[#F8F7F7] bg-opacity-70 shadow-lg rounded-xl border border-gray-200 w-full  max-w-full max-h-full overflow-y-auto flex flex-row justify-start items-start mx-5 my-5 px-5 py-5">
      <Sidebar/>
      <div className="flex-1 flex flex-col">
        <Navbar />
        {/* Main container with content */}
      </div>
      </div>
    </div>

    );

};

export default IPD;
