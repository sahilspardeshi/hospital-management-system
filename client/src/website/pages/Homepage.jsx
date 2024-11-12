import React, {useEffect, useState} from "react";
import { useDispatch , useSelector } from "react-redux";
import UserFriendly from "../components/UserFriendly/UserFriendly";
import Testimonial from "../components/Testimonial/Testimonial";
import Portfolio from "../components/Portfolio/Portfolio";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Navbar/Nav.jsx";
import Healthcare from "../components/HealthcareNav/Healthcare.jsx";
import Service from "../components/Services/Service.jsx";
import { fetchAdvertisement } from "../redux/actions/adActions.js";
;

const Home = () => {

  

  const dispatch = useDispatch();

  const {loading , ad , error} = useSelector((state)=>state.advertisement);

  useEffect(()=>{
    dispatch(fetchAdvertisement());
  },[dispatch]);

  const [groupedAdvertisements, setGroupedAdvertisements] = useState({
    Section_0: [],
    Section_1: [],
    Section_2: [],
    Section_3: [],
    Section_4: []
  });

  useEffect(() => {
    if (ad && ad.length > 0) {
      // Grouping advertisements by their section
      const grouped = ad.reduce((acc, curr) => {
        const section = curr.section || "Uncategorized"; //It Handle missing section 
        if (!acc[section]) {
          acc[section] = [];
        }
        acc[section].push(curr);
        return acc;
      }, {});

      setGroupedAdvertisements(grouped);
    }
  }, [ad]);

  console.log(groupedAdvertisements); 

  console.log(ad)
  
  return (
    <div className="min-h-screen  bg-gradient-to-b from-purple-200 via-orange-100 to-gray-200 flex justify-center items-center ">
      {/* Main container with fixed width and height and vertical scrolling */}
      <div className="bg-[#F8F7F7] bg-opacity-70 shadow-lg rounded-xl border border-gray-200 w-full  max-w-full max-h-full overflow-y-auto flex flex-col justify-start items-center mx-5 my-5 px-5 py-5 overflow-x-hidden ">
      <Nav/>

      
      <Healthcare 
      //  section0={section0} 
        advertisements={groupedAdvertisements.Section_0} 
        />

      <Service
       advertisements={groupedAdvertisements.Section_1}
      />      
      <UserFriendly 
       advertisements={groupedAdvertisements.Section_2}
      />
      <Portfolio  
      advertisements={groupedAdvertisements.Section_3}
      />

      <Testimonial/>
      <Footer/>
      </div>
    </div>
  );
};

export default Home;
