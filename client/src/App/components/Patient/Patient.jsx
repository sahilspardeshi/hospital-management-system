import React from "react";
import Sidebar from "../SideBar/Sidebar";
import Navbar from "../Navbar/Navbar";

const Dashboard = () => {
  return (
    <div className="h-full flex ">
      <div className=" border-b  w-full  max-w-full max-h-full overflow-y-auto flex flex-row justify-start items-start mx-4 my-4 px-4 py-4">
        <div className="flex-1 flex flex-col">
          {/* Main container with content */}
          <div className="flex-1 p-6 bg-white rounded-lg shadow-md m-4 overflow-y-auto">
            <h2 className="text-2xl font-semibold mb-4">Reports</h2>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search Patient Name or ID"
                className="w-1/2 p-2 border rounded-md shadow-sm"
              />
              <button className="ml-4 px-4 py-2 bg-green-500 text-white rounded-md">
                View Reports
              </button>
            </div>
            <div className="border p-6 rounded-lg bg-gray-100">
              <p>Patient ID:</p>
              {/* Additional content */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
