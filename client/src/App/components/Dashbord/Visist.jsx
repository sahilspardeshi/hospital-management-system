import React from 'react';

import VISIT from '../IMAGE/Visit.png';
import Rating from '../IMAGE/Vector.png';
import VIS from '../IMAGE/doctor-visit 1.png';
import Current from '../IMAGE/patient 1.png';

const Visit = () => {
  return (
    <div className="flex">
      <div className="w-[10%]"></div>

      <div className="w-[90%] ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4 lg:px-12 py-4"> 
          {/* Patients Treated */}
          <div className="p-4 rounded-lg shadow-lg flex items-center space-x-2 max-w-xs mx-auto">
            <img src={VISIT} alt="Doctor Avatar" className="rounded-full w-10" />
            <h3 className="text-lg font-bold">3000 Patients <br/> Treated</h3>
          </div>

          {/* Ratings */}
          <div className="p-4 rounded-lg shadow-md flex items-center space-x-2 max-w-xs mx-auto">
            <img src={Rating} alt="Rating" className="rounded-full w-8" />
            <h3 className="text-lg font-bold">
              Ratings <br /> ⭐⭐⭐⭐⭐
            </h3>
          </div>

          {/* Visits */}
          <div className="p-4 rounded-lg shadow-md flex items-center space-x-2 max-w-xs mx-auto ">
            <img src={VIS} alt="Visits" className="rounded-full w-10 " />
            <h3 className="text-lg font-bold pl-5 ">Visit’s <br /> +1200</h3>
          </div>

          {/* Current Treatment */}
          <div className="p-4 rounded-lg shadow-md flex items-center space-x-2 max-w-xs mx-auto">
            <img src={Current} alt="Current Treatment" className="rounded-full w-10" />
            <h3 className="text-lg font-bold">Current Treatment <br /> +8</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visit;
