import React from "react";
import Avatar from "../IMAGE/21.png";

const PatientCard = () => {
  return (
    <>
      <div className="max-w-full mx-auto bg-white rounded-lg shadow-lg min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 h-full">
          <div className="hidden md:block col-span-1"></div>

          <div className="col-span-5 md:col-span-4">
            <h1 className="text-2xl font-bold text-center md:text-left">
              JENNIFER D'SOUZA (50)
            </h1>
            <hr className="border-black border-1" />

            {/* Patient header and vitals */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 p-7">
                  <img
                    src={Avatar}
                    alt="patient"
                    className="w-24 h-24 rounded-full border-2 border-gray-300"
                  />
                  <div>
                    <div className="text-sm">
                      <p>
                        <span className="font-bold">Gender:</span> Male
                      </p>
                      <p>
                        <span className="font-bold">Age:</span> 34 Years 10 Months 16 Days
                      </p>
                      <p>
                        <span className="font-bold">Guardian Name:</span> Odesman D'souza
                      </p>
                      <p>
                        <span className="font-bold">Phone:</span> 8767899362
                      </p>
                      <p>
                        <span className="font-bold">TPA:</span> Health Life Insurance
                      </p>
                      <p>
                        <span className="font-bold">TPA ID:</span> 1234567890
                      </p>
                      <p>
                        <span className="font-bold">TPA Validity:</span> 10/07/2025
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="border-black border-1" />

                {/* Case Information and Credit Info */}
                <div className="flex flex-col md:flex-row space-x-4 whitespace-nowrap ">
                  <div className="w-full p-7">
                    <p>
                      <span className="font-bold ">Case ID:</span> 1169
                    </p>
                    <p>
                      <span className="font-bold">IPD No:</span> IPDN101
                    </p>
                    <p>
                      <span className="font-bold">Admission Date:</span> 18/01/2024 08:09 AM
                    </p>
                    <p>
                      <span className="font-bold">Bed:</span> tab - VIP Ward - Ground Floor
                    </p>
                  </div>

                  <div className="w-full">
                    <div className="flex flex-col items-center">
                      <div className="relative w-20 h-20">
                        <svg
                          className="absolute w-full h-full text-green-500"
                          viewBox="0 0 36 36"
                        >
                          <path
                            className="stroke-current"
                            fill="none"
                            strokeWidth="4"
                            strokeDasharray="100, 100"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                        </svg>
                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-lg">
                          100%
                        </span>
                      </div>
                      <div className="text-sm  text-center">
                        <p  className="font-bold">Credit Limit:$2,000.00</p>
                        <p className="text-red-600 "><span className="font-bold">Used Credit Limit:</span> $0.00</p>
                        <p  className="text-green-600 font-bold">Balance Credit Limit: $2,000.00</p>
                      </div>

                    </div>
                    
                  </div>
                </div>
                <hr className="border-black border-1 " />
                <div>
                <h1 className="font-bold">HISTORY</h1>
            </div>
              </div>

            
              {/* Vitals Section */}
              <div className="border-l-0 lg:border-l-2 border-black pl-0 lg:pl-4 pb-10">
                <h2 className="text-lg font-semibold mb-2">Current Vitals:</h2>
                <ul>
                  {[
                    { label: "Weight", value: "95-140 Kilograms", status: "Normal", date: "07/03/2024 01:14 PM" },
                    { label: "Height", value: "95 Centimeters", status: "Normal", date: "24/05/2024 03:10 PM" },
                    { label: "Pulse", value: "65 Beats per minute", status: "Low", date: "24/05/2024 03:10 PM" },
                    { label: "Temperature", value: "96.3 Fahrenheit", status: "Normal", date: "24/05/2024 03:10 PM" },
                    { label: "BP", value: "85-105 mmHg", status: "High", date: "24/05/2024 03:10 PM" },
                    { label: "Respiration", value: "14 brm", status: "Normal", date: "24/05/2024 03:10 PM" },
                    { label: "Blood Glucose", value: "89 mg/dL", status: "Normal", date: "24/05/2024 03:10 PM" },
                    { label: "BMI", value: <button className="bg-green-500 text-white py-1 px-2 rounded">105.26</button>, status: "", date: "" },
                ].map((vital, index) => (
                    <li
                      key={index}
                      className="flex flex-col md:flex-row justify-between items-center mb-2 space-x-4 whitespace-nowrap"
                    >
                      <span className="flex-1 font-bold">{vital.label}</span>
                      <span className="flex-1">{vital.value}</span>
                      <span
                        className={`flex-1 font-bold ${
                          vital.status === "High"
                            ? "text-red-500"
                            : vital.status === "Low"
                            ? "text-yellow-500"
                            : "text-green-500"
                        }`}
                      >
                        {vital.status}
                      </span>
                      <span className="flex-1 text-gray-500">{vital.date}</span>
                    </li>
                  ))}
                </ul>
                <hr className="border-black border-1" />

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default PatientCard;
