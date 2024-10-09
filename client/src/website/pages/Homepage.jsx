import React from "react";
import UserFriendly from "../components/UserFriendly/UserFriendly";
import Testimonial from "../components/Testimonial/Testimonial";
import Portfolio from "../components/Portfolio/Portfolio";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Navbar/Nav.jsx";
import Healthcare from "../components/HealthcareNav/Healthcare.jsx";
import Service from "../components/Services/Service.jsx";
import PayOption from "../components/Payment/PayOption.jsx";

const Home = () => {
  return (
    <div className="min-h-screen  bg-gradient-to-b from-purple-200 via-orange-100 to-gray-200 flex justify-center items-center">
      {/* Main container with fixed width and height and vertical scrolling */}
      <div className="bg-[#F8F7F7] bg-opacity-70 shadow-lg rounded-xl border border-gray-200 w-full  max-w-full max-h-full overflow-y-auto flex flex-col justify-start items-center mx-5 my-5 px-5 py-5">
      <Nav/>
      <PayOption/>
      <Healthcare/>
      <Service/>      
      <UserFriendly/>
      <Portfolio/>
      <Testimonial/>
      <Footer/>
      </div>
    </div>
  );
};

export default Home;
