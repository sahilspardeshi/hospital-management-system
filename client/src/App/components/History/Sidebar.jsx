import React, { useState } from "react";
import Logo from "../IMAGE/ArohiLogo.png";

const Menu = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const menuItems = [
    { icon: 'fa-solid fa-house', label: 'Dashboard' },
    { icon: 'fa-solid fa-clipboard', label: 'Appointment Request' },
    { icon: 'fa-solid fa-chart-simple', label: 'Tables' },
    { icon: 'fa-brands fa-slack', label: 'Articles' },
    { icon: 'fa-solid fa-user', label: 'Profile' },
    { icon: 'fa-solid fa-lock', label: 'Logout' },
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <ul className="list-none flex flex-col items-start w-full"> {/* Align menu items to start */}
      {menuItems.map((item, index) => (
        <li
          key={index}
          className={`flex items-center p-4 cursor-pointer text-lg 
          hover:bg-orange-100 transition-colors duration-300 
          ${activeIndex === index ? 'bg-orange-500 text-white' : ''}`}
          onClick={() => handleClick(index)}
        >
          <i className={`${item.icon} mr-2 ${activeIndex === index ? 'text-white' : ''}`}></i>
          {item.label}
        </li>
      ))}
    </ul>
  );
};

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 w-96 bg-white h-screen shadow-lg flex flex-col items-start"> {/* Align everything to start */}
      <div className="p-6 flex justify-start w-full"> {/* Center the logo and align to start */}
        <img src={Logo} alt="Hospital Logo" className="h-20 w-20" />
      </div>
      <Menu />
    </div>
  );
};

export default Sidebar;
