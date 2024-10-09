import React from "react";
import Dr from '../../assets/images/Aarohilogo.png';
import video from '../../assets/images/Videologo.png';

const HealthCareSection = () => {
  return (
    <div className=" h-auto w-11/12 flex flex-col justify-center font-poppins py-16">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-screen-2xl mx-auto px-8 pt-0 pb-16">
        
        {/* ----------------------- Left Section  ------------------*/}
        <div className="w-full lg:text-left pr-5">
          <div className="font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
            <h1 className=" font-bold text-5xl  mb-6">
             <span className="text-green-600 font-bold text-5xl pb-6">We care</span> <br/>
            about your health</h1>
          </div>
          <p className="text-gray-500 text-base md:text-lg lg:text-xl mb-8">
            Good health is the state of mental, physical, and social<br />
             well-being and it does not just mean the absence of diseases.
          </p>

          {/* ------------------------- Sign-in/up Buttons --------------------- */}
          <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-6">
           <button className="bg-red-400 px-4 h-[53px] rounded-lg text-white mt-3 font-bold text-lg">Book an appointment →</button>
            <button className="flex items-center justify-center px-6 py-3 rounded-10 text-lg lg:text-xl">
              <span className="mr-3 border rounded-full border-gray-400 ">
                <img src={video} alt="Hospital Logo" className="h-9 w-auto m-[6px] hover:translate-x-1"/>
              </span> 
             <span className="font-semibold"> Watch videos</span>
            </button>
          </div>

          {/* -------------------------- Sign-up Text --------------------------*/}
          <p className="font-semibold mt-8 text-lg lg:text-xl">
            Become a member of our hospital community ?{" "}
            <span className="text-green-500 font-bold cursor-pointer">Sign up</span>
          
          </p>
        </div>

        {/* ----------------Right Section - Doctors  ------------*/}
      <div className="w- p-5 relative flex justify-center items-center  bg-red-100 rounded-full">
        <div className="w p-5 relative flex justify-center items-center  bg-red-50 rounded-full">
      <div className="w-full lg:w-72 p-auto relative flex justify-center items-center bg-red-200 rounded-full">
  <img
    src={Dr} //Main Dr Img 
    alt="Doctors"
    className="w-72 h-72"
  />
   <div className="absolute top-10 -left-40 bg-white p-2 rounded-2xl shadow-lg flex items-center space-x-2">
              <span role="img" aria-label="doctor" className="text-yellow-500">🔍</span>
              <div>
                <p className="font-semibold">Well Qualified Doctors</p>
                <p className="text-xs text-gray-500">Treat with care</p>
              </div>
            </div>
            <div className="absolute bottom-10 -left-40 bg-white px-6 p-2 rounded-2xl shadow-lg flex items-center space-x-2">
              <span role="img" aria-label="email" className="text-yellow-500">📧</span>
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-xs text-gray-500">www.arohisoftwares.com</p>
              </div>
            </div> 
            <div className="absolute bottom-6 -right-16 bg-white  p-2 rounded-2xl shadow-lg flex items-center space-x-2">
              
              <div>
                <p className="font-semibold text-black">Contact No</p>
                <p className="text-xs text-black">+91 8149191332</p>
              </div>
              <span role="img" aria-label="phone" className="text-yellow-500">📞</span>
            </div>
</div>

      </div>
      </div>
      </div>
    </div>
  );
};

export default HealthCareSection;
