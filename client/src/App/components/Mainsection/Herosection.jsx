import React from "react";
import Dr from '../../assets/images/MainArohi_img.png';

// import video  from '../../assets/images/videologo.png';

const HealthCareSection = () => {
  return (
    <div className="bg-gradient-to-r from-purple-100 to-pink-50 min-h-screen flex flex-col justify-center font-poppins">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-screen-2xl mx-auto px-8 pt-0 pb-16">
        
        {/* ----------------------- Left Section  ------------------*/}
        <div className="w-full lg:w-2/5 lg:text-left pr-5">
          <div className="font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
            <h1 className="text-green-600 font-bold text-6xl  mb-6">
              We care
            </h1>
            <h2 className="text-black-600 font-bold text-5xl">About your health</h2>
          </div>
          <p className="text-gray-500 text-base md:text-lg lg:text-xl mb-8">
            Good health is the state of mental, physical, and social<br />
             well-being and it does not just mean the absence of diseases.
          </p>

          {/* ------------------------- Sign-in/up Buttons --------------------- */}
          <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-6">
            <button className="bg-red-400 hover:bg-red-500 text-white px-10 py-3 rounded-lg shadow-lg ">
              Book an appointment <i className="fa-solid fa-arrow-right"></i>
            </button>
            <button className="flex items-center justify-center px-6 py-3 rounded-10 text-lg lg:text-xl">
              <span className="mr-3 border  ">
                <img src={"video"} alt="Hospital Logo" className="h-12 w-auto"/>
              </span> 
              Watch videos
            </button>
          </div>

          {/* -------------------------- Sign-up Text --------------------------*/}
          <p className="text-gray-500 mt-8 text-lg lg:text-xl">
            Become a member of our hospital community?{" "}
            <span className="text-green-500 font-bold cursor-pointer">Sign up</span>
          
          </p>
        </div>

        {/* ----------------Right Section - Doctors  ------------*/}
        <div className="w-full lg:w-3/5 relative flex justify-center items-center">
  <img
    src={Dr} //Main Dr Img 
    alt="Doctors"
    className="w-full h-auto object-cover pl-10"
  />
</div>

      </div>
    </div>
  );
};

export default HealthCareSection;
