import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  BarElement,
  Tooltip,
  Title,
} from "chart.js";
import thisMonth from "../IMAGE/Timeline Button.png";
import Track from "../IMAGE/Track.png";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, BarElement, Tooltip, Title);

// Function to generate random data
const generateRandomData = (num, min, max) => {
  return Array.from({ length: num }, () =>
    Math.floor(Math.random() * (max - min + 1)) + min
  );
};

const App = () => {
  // State for Bar Chart (Total Visits)
  const [barChartData, setBarChartData] = useState({
    labels: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
    datasets: [
      {
        label: "Total Visits",
        data: generateRandomData(6, 100, 300),
        backgroundColor: ["#FF647C", "#38BDF8", "#FF647C", "#FF647C", "#FF647C", "#FF647C"],
        borderRadius: 6,
      },
    ],
  });

  // State for Line Chart (Total Treatment)
  const [lineChartData, setLineChartData] = useState({
    labels: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
    datasets: [
      {
        label: "Total Treatment",
        data: generateRandomData(6, 50, 150),
        borderColor: "#FF647C",
        backgroundColor: "#FF647C",
        fill: false,
        tension: 0.4,
      },
    ],
  });

  // State for another Line Chart (Red and Blue Lines)
  const [chartData, setChartData] = useState({
    labels: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
    datasets: [
      {
        label: "Red Line",
        data: [95, 108, 98, 110, 105, 115],
        borderColor: "#FF647C",
        backgroundColor: "#FF647C",
        fill: false,
        tension: 0.4,
      },
      {
        label: "Blue Line",
        data: [90, 100, 95, 105, 102, 110],
        borderColor: "#00BFFF",
        backgroundColor: "#00BFFF",
        fill: false,
        tension: 0.4,
      },
    ],
  });

  // Simulating dynamic data for right chart
  const [rightChartData, setRightChartData] = useState({
    labels: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
    datasets: [
      {
        label: "Right Chart Line",
        data: [95, 108, 98, 110, 105, 115],
        borderColor: "#FF647C",
        backgroundColor: "#FF647C",
        fill: false,
        tension: 0.4,
      },
    ],
  });

  // Options for all charts
  const commonOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        barPercentage: 0.3, 
        categoryPercentage: 0.8, 
      },
      y: {
        grid: { display: false },
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-5">
      <div className="flex w-full">
        <div className="w-2/12"></div>
        <div className="w-10/12 grid grid-cols-2 gap-8">
          {/* Chart 1: Total Visits (Bar Chart) */}
          <div className="rounded-lg shadow-lg p-8">
            <img src={thisMonth} alt="Doctor Avatar" className="rounded-full w-50" />
            <div className="text-4xl font-bold text-gray-800">+273</div>
            <div className="text-green-500 text-sm font-semibold mt-2">
              <span className="text-gray-500 text-sm font-semibold mt-2 pr-4">Total Visit</span>
              <i className="fa-solid fa-square-caret-up"></i> +2.45%
            </div>
            <img src={Track} alt="Doctor Avatar" className="rounded-full w-70 m-5" />
            <div className="mt-8">
              <Bar data={barChartData} options={commonOptions} height={300} width={600} />
            </div>
          </div>

          {/* Chart 2: Total Treatment (Line Chart) */}
          <div className="rounded-lg shadow-lg p-8">
            <img src={thisMonth} alt="Doctor Avatar" className="rounded-full w-50" />
            <div className="text-4xl font-bold text-gray-800">+106</div>
            <div className="text-green-500 text-sm font-semibold mt-2">
              <span className="text-gray-500 text-sm font-semibold mt-2 pr-4">Total Treatment</span>
              <i className="fa-solid fa-square-caret-up"></i> +4.25%
            </div>
            <img src={Track} alt="Doctor Avatar" className="rounded-full w-70 m-5" />
            <div className="mt-8">
              <Line data={lineChartData} options={commonOptions} height={300} width={600} />
            </div>
          </div>

          {/* Chart 3: Red and Blue Line Chart */}
          <div className="rounded-lg shadow-lg p-8">
            <img src={thisMonth} alt="Doctor Avatar" className="rounded-full w-50" />
            <div className="text-4xl font-bold text-gray-800">$10.5K</div>
            <div className="text-green-500 text-sm font-semibold mt-2">
              <span className="text-gray-500 text-sm font-semibold mt-2 pr-4">Total Earning</span>
              <i className="fa-solid fa-square-caret-up"></i> +4.25%
            </div>
            <img src={Track} alt="Doctor Avatar" className="rounded-full w-70 m-5" />
            <div className="mt-8">
              <Line data={chartData} options={commonOptions} height={300} width={600} />
            </div>
          </div>

          {/* Chart 4: Additional Data (Right Chart Line) */}
          <div className="rounded-xl shadow-xl p-8">
            <img src={thisMonth} alt="Doctor Avatar" className="rounded-full w-50" />
            <div className="text-4xl font-bold text-gray-800">$38.00</div>
            <div className="text-green-500 text-sm font-semibold mt-2">
              <span className="text-gray-500 text-sm font-semibold mt-2 pr-4"> Total Medicine </span>
              <i className="fa-solid fa-square-caret-up"></i>+2.45%
            </div>
            <img src={Track} alt="Doctor Avatar" className="rounded-full w-70 m-5" />
            <div className="mt-8">
              <Line data={rightChartData} options={commonOptions} height={300} width={600} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
