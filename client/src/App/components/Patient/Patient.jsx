import React from "react";

const Patient = () => {
  return (
    <div className="flex-1 overflow-y-auto"> {/* Ensure this section is scrollable */}
      <div className="h-[calc(100vh-120px)] overflow-y-auto p-5"> {/* Set specific height and overflow */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="mb-4">
            <div className="flex-1 p-6 bg-white rounded-lg shadow-md m-4">
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
        ))}
      </div>
    </div>
  );
};

export default Patient;
  