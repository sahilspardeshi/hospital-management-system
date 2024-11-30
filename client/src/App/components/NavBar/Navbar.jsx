import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import notification from "../../assets/images/notifications_none.png";
import darkmode from "../../assets/images/moon-solid_1.png";
import about from "../../assets/images/info_outline.png";
import Doctor from "../../assets/images/dr.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getprofile } from "../../redux/actions/StaffProfileAction";

const Navbar = () => {
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState(null);

  // Check the path on initial render and set the selected section accordingly
  const dispatch = useDispatch();
  const userdata = useSelector((state) => state.profile);
const user =userdata.userprofile;
  console.log("userdata" , userdata)

  useEffect(() => {
    console.log("get profile called ")
    dispatch(getprofile());
  }, [dispatch]);
  
 // Safe checks for user data
 let Userprofile = "";
 let firstCharAfterSpace = "";

 // Check if the profile is available
 if (user && user.fullName) {
   Userprofile = user.fullName;
   const spaceIndex = Userprofile.indexOf(' ');

   if (spaceIndex !== -1) {
     firstCharAfterSpace = Userprofile.charAt(spaceIndex + 1);
   }
 }
  
  useEffect(() => {
    const pathSegments = location.pathname.split('/').filter(Boolean); // Get non-empty path segments

    // Keywords to check for in the path
    const keywords = ["IPD", "OPD", "DASHBOARD"];

    // Find the keyword present in the path, if any
    const matchedKeyword = keywords.find(keyword =>
      pathSegments.some(segment => segment.toLowerCase() === keyword.toLowerCase())
    );

    // Set the selected section to the matched keyword or default to null if no match
    setSelectedSection(matchedKeyword || null);
  }, [location.pathname]);
  const handleClick = (section) => {
    setSelectedSection(section);
    navigate(`/${section.toLowerCase()}`);
  };

  return (
    <header className="flex justify-between items-center py-2 px-10 mx-2 w-full rounded-t-lg">
      <h1 className="text-xl font-bold mx-8">
        Welcome, <span className="text-red-500">Dr.{Userprofile} </span>
      </h1>

      {/* OPD and IPD Section */}
      <div className="flex items-center space-x-4">
        <button
          className={`px-5 py-2 font-semibold text-sm rounded-full transition-all duration-200 ${
            selectedSection === "OPD"
              ? "bg-green-300 text-white"
              : "bg-white hover:bg-green-300 hover:text-white"
          }`}
          onClick={() => handleClick("OPD")}
        >
          OPD
        </button>
        <button
          className={`px-5 py-2 font-semibold text-sm rounded-full transition-all duration-200 ${
            selectedSection === "IPD"
              ? "bg-green-300 text-white"
              : "bg-white hover:bg-green-300 hover:text-white"
          }`}
          onClick={() => handleClick("IPD")}
        >
          IPD
        </button>
        <button
          className={`px-5 py-2 font-semibold text-sm rounded-full transition-all duration-200 ${
            selectedSection === "DASHBOARD"
              ? "bg-green-300 text-white"
              : "bg-white hover:bg-green-300 hover:text-white"
          }`}
          onClick={() => handleClick("DASHBOARD")}
        >
          DASHBOARD
        </button>
      </div>

      {/* Search and Icons */}
      <div className="flex items-center space-x-4 bg-white p-2 rounded-full">
        <input
          type="text"
          placeholder="Search"
          className="px-3 py-2 bg-gray-200 rounded-full hidden md:block"
        />
        <img
          src={notification}
          alt="Notification Bell"
          className="w-6 h-6 cursor-pointer"
        />
        <img
          src={darkmode}
          alt="Dark Mode Toggle"
          className="w-5 h-5 cursor-pointer"
        />
        <img src={about} alt="Information" className="w-6 h-6 cursor-pointer" />



        <div className="w-10 h-10 px-[10px] py-2 font-bold text-white rounded-full bg-red-400 overflow-hidden">
         <Link to='/dashboard/Myprofile'>
         {user ? (
              <h1 className=" mx-auto rounded-full bg-red-400">
                {Userprofile ? `${Userprofile[0].toUpperCase()}${firstCharAfterSpace}` : "?"}
              </h1>
            ) : (
              <div className="w-6 h-6 rounded-full bg-red-400"></div> // Fallback loading indicator
            )}
          {/* <img src={Doctor} alt="Doctor Avatar" className="w-full h-full" /> */}
         </Link>
        </div>


      </div>
    </header>
  );
};

export default Navbar;
