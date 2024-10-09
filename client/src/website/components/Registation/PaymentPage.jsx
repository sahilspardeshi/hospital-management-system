// PaymentModal.jsx
import React, { useState } from "react";
import back from "../../assets/images/back.jpg";
import tick from "../../assets/images/tick.png";
const PaymentModal = ({isOpen, closeModal, OnSuccess }) => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleMonthlyClick = () => setIsMonthly(true);
  const handleYearlyClick = () => setIsMonthly(false);

  const pricingPlans = isMonthly
    ? [
        { name: "Basic", price: "$19", period: "/month", features: ["Consequet ex provident", "Desement sit cupidatat", "Aumert id ers et visi exillum"] },
        { name: "Essential", price: "$59", period: "/month", features: ["Consequet ex provident", "Desement sit cupidatat", "Additional feature 1", "Additional feature 2"], popular: true },
        { name: "Premium", price: "$119", period: "/month", features: ["Desement sit cupidatat", "Additional feature 1", "Additional feature 2", "Additional feature 3"] },
      ]
    : [
        { name: "Basic", price: "$119", period: "/year", features: ["Consequet ex provident", "Desement sit cupidatat", "Aumert id ers et visi exillum"] },
        { name: "Essential", price: "$159", period: "/year", features: ["Consequet ex provident", "Desement sit cupidatat", "Additional feature 1", "Additional feature 2"], popular: true },
        { name: "Premium", price: "$1119", period: "/year", features: ["Desement sit cupidatat", "Additional feature 1", "Additional feature 2", "Additional feature 3"] },
      ];

  return (
    <>
        {
      !isOpen? null : <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="relative w-[95%] sm:w-[90%] md:w-[75%] lg:w-[60%] xl:w-[50%] mx-auto border-2 p-4 md:p-6 bg-white rounded-xl shadow-lg">
        {/* Close Button */}
        <button className="absolute top-2 right-2 text-gray-500" onClick={closeModal}>
          &times;
        </button>

        <h2 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 leading-tight">
          We offer great <span className="text-green-400">price</span> plans for the 
          <br className="pt-2" /> application
        </h2>

        {/* Toggle Button */}
        <div className="flex justify-center items-center mb-4">
          <div className="flex justify-center items-center w-28 p-1 shadow-md rounded-full">
            <button
              className={`rounded-full w-14 py-1 text-xs sm:text-sm transition-colors duration-300 ${isMonthly ? "bg-green-600 text-white" : "bg-gray-200 text-black"}`}
              onClick={handleMonthlyClick}
            >
              Monthly
            </button>
            <button
              className={`rounded-full w-14 py-1 text-xs sm:text-sm transition-colors duration-300 ${!isMonthly ? "bg-green-600 text-white" : "bg-gray-200 text-black"}`}
              onClick={handleYearlyClick}
            >
              Yearly
            </button>
          </div>
          <span className="ml-2 text-purple-600 text-xs sm:text-sm">Save up to 30%</span>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white shadow-md rounded-lg p-3 sm:p-4 lg:p-6 text-center transition-transform duration-300 hover:border-blue-700 hover:border-2 hover:scale-105`}
            >
              {plan.popular && <p className="text-xs text-yellow-600 font-semibold mb-2">Most Popular</p>}
              <h3 className="text-md sm:text-lg md:text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                {plan.price}
                <span className="text-xs sm:text-sm md:text-base">{plan.period}</span>
              </p>
              <ul className="mb-4 bg-gray-100 p-2 rounded-lg text-xs sm:text-sm">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="mb-1 flex items-center">
                    <img src={tick} alt="Tick" className="w-4 h-4 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="border-2 bg-blue-100 border-blue-500 text-blue-500 py-1 px-2 sm:py-2 sm:px-3 md:py-2 md:px-4 rounded hover:bg-blue-500 hover:text-white w-full transition-colors duration-300 text-xs sm:text-sm" onClick={OnSuccess}>
                Get started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
    }</>

   
  );
};

export default PaymentModal;
