import React from "react";
import Avatar from "../IMAGE/21.png";

const PatientCard = ({ patientData, vitals }) => {
  return (
    <>
      <div className="max-w-full mx-auto  rounded-lg shadow-lg min-h-screen p-3 sm:p-4 md:p-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-4 h-full w-full">
          <div className="hidden md:block col-span-1 w-full"></div>

          <div className="col-span-5 md:col-span-4 w-full">
            {/* Patient Header */}
            <h1 className="text-xl md:text-2xl font-bold text-center md:text-left mb-3 w-full">
              {patientData.name} ({patientData.age})
            </h1>
            <hr className="border-black border-1 mb-3 w-full" />

            {/* Patient header and vitals */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
              {/* Patient Information */}
              <div className="flex flex-col space-y-4 w-full">
                <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6  w-full">
                <img
                  src={patientData.avatar || Avatar}
                  alt="patient"
                  className="w-48 h-48 md:w-56 md:h-56 rounded-full border-2 border-gray-400"
                />

                  <div className="grid grid-cols-2 gap-x-4 text-sm md:text-base w-full">
                    <span className="font-bold">Gender:</span>
                    <p>{patientData.gender}</p>

                    <span className="font-bold">Age:</span>
                    <p>{patientData.fullAge}</p>

                    <span className="font-bold">Guardian Name:</span>
                    <p>{patientData.guardianName}</p>

                    <span className="font-bold">Phone:</span>
                    <p>{patientData.phone}</p>

                    <span className="font-bold">TPA:</span>
                    <p>{patientData.tpa}</p>

                    <span className="font-bold">TPA ID:</span>
                    <p>{patientData.tpaId}</p>

                    <span className="font-bold">TPA Validity:</span>
                    <p>{patientData.tpaValidity}</p>
                  </div>
                </div>

                <hr className="border-black border-1" />

                {/* Case Information and Credit Info */}
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full">
                  {/* Case Information */}
                  <div className="grid grid-cols-2 gap-x-4 text-xs md:text-sm w-full p-3 md:p-4">
                    <span className="font-bold">Case ID:</span>
                    <p>{patientData.caseId}</p>

                    <span className="font-bold">IPD No:</span>
                    <p>{patientData.ipdNo}</p>

                    <span className="font-bold">Admission Date:</span>
                    <p>{patientData.admissionDate}</p>

                    <span className="font-bold">Bed:</span>
                    <p>{patientData.bed}</p>
                  </div>

                  {/* Credit Information */}
                  <div className="w-full flex flex-col items-center p-3 md:p-4">
                    <div className="relative w-16 h-16 md:w-20 md:h-20">
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
                      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-sm md:text-lg">
                        {patientData.creditUsedPercentage}%
                      </span>
                    </div>
                    <div className="text-xs md:text-sm text-center mt-2">
                      <p className="font-bold">
                        Credit Limit: ${patientData.creditLimit}
                      </p>
                      <p className="text-red-600">
                        <span className="font-bold">Used Credit Limit:</span> ${patientData.usedCreditLimit}
                      </p>
                      <p className="text-green-600 font-bold">
                        Balance Credit Limit: ${patientData.balanceCreditLimit}
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="border-black border-1" />
                <div>
                  <h1 className="font-bold text-sm md:text-base">HISTORY</h1>
                </div>
              </div>

              {/* Vitals Section */}
              <div className="border-l-0 lg:border-l-2 border-black pl-0 lg:pl-4 pb-10 p-3 md:p-4 w-full">
                <h2 className="text-base md:text-lg font-semibold mb-3">
                  Current Vitals:
                </h2>
                <ul className="w-full">
                  {vitals.map((vital, index) => (
                    <li
                      key={index}
                      className="flex flex-col md:flex-row justify-between items-center mb-3 text-xs md:text-sm w-full"
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

const App = () => {
  const patientData = {
    name: "Jennifer D'Souza",
    age: 50,
    gender: "Female",
    fullAge: "50 Years",
    guardianName: "Odesman D'souza",
    phone: "8767899362",
    tpa: "Health Life Insurance",
    tpaId: "1234567890",
    tpaValidity: "10/07/2025",
    caseId: "1169",
    ipdNo: "IPDN101",
    admissionDate: "18/01/2024 08:09 AM",
    bed: "VIP Ward - Ground Floor",
    creditLimit: 2000,
    usedCreditLimit: 0,
    balanceCreditLimit: 2000,
    creditUsedPercentage: 0,
    avatar: null, // fallback to default Avatar if null
  };

  const vitals = [
    { label: "Weight", value: "95-140 Kilograms", status: "Normal", date: "07/03/2024 01:14 PM" },
    { label: "Height", value: "95 Centimeters", status: "Normal", date: "24/05/2024 03:10 PM" },
    { label: "Pulse", value: "65 Beats per minute", status: "Low", date: "24/05/2024 03:10 PM" },
    { label: "Temperature", value: "96.3 Fahrenheit", status: "Normal", date: "24/05/2024 03:10 PM" },
    { label: "BP", value: "85-105 mmHg", status: "High", date: "24/05/2024 03:10 PM" },
    { label: "Respiration", value: "14 brm", status: "Normal", date: "24/05/2024 03:10 PM" },
    { label: "Blood Glucose", value: "89 mg/dL", status: "Normal", date: "24/05/2024 03:10 PM" },
    { label: "BMI", value: "105.26", status: "", date: "" },
  ];

  return <PatientCard patientData={patientData} vitals={vitals} />;
};

export default App;
