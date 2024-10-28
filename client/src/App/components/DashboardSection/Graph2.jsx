import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
} from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip);

const App = () => {
  // Initial data state for your chart
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

  // Simulating fetching dynamic data
  useEffect(() => {
    const fetchData = () => {
      // Simulating data fetched from an API or other source
      const newData = {
        labels: ["MAR", "APR", "MAY", "JUN", "JUL", "AUG"],
        datasets: [
          {
            label: "Red Line",
            data: [120, 125, 130, 140, 135, 145],
            borderColor: "#FF647C",
            backgroundColor: "#FF647C",
            fill: false,
            tension: 0.4,
          },
          {
            label: "Blue Line",
            data: [110, 115, 120, 130, 125, 135],
            borderColor: "#00BFFF",
            backgroundColor: "#00BFFF",
            fill: false,
            tension: 0.4,
          },
        ],
      };

      // Update chart data after 2 seconds to simulate delay
      setTimeout(() => {
        setChartData(newData);
      }, 2000);
    };

    fetchData();
  }, []); // Empty dependency array means this runs once on component mount

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `$${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  // Chart for right side
  const [rightChartData, setRightChartData] = useState({
    labels: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb"],
    datasets: [
      {
        label: "Red Line",
        data: [95, 108, 98, 110, 105, 115],
        borderColor: "#FF647C",
        backgroundColor: "#FF647C",
        fill: false,
        tension: 0.4,
      },
    ],
  });

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div className="flex space-x-8">
        {/* Left Chart (Original) */}
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm text-gray-500">This month</div>
          </div>
          <div className="text-4xl font-bold text-gray-800">$10.5K</div>
          <div className="text-green-500 text-sm font-semibold mt-2">+4.25%</div>
          <div className="text-green-500 text-sm font-semibold mt-1">On track</div>
          <div className="mt-8">
            <Line data={chartData} options={options} height={400} width={800} />
          </div>
        </div>

        {/* Right Chart (Additional Chart) */}
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm text-gray-500">Additional Data</div>
          </div>
          <div className="text-4xl font-bold text-gray-800">$38.00</div>
          <div className="text-green-500 text-sm font-semibold mt-2">+2.45%</div>
          <div className="text-green-500 text-sm font-semibold mt-1">On track</div>
          <div className="mt-8">
            <Line data={rightChartData} options={options} height={400} width={800} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
