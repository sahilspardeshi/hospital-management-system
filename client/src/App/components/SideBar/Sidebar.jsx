import React, { useState } from "react";
import Logo from "../../assets/images/Aarohilogo.png";

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
    <ul className="space-y-2">
      {menuItems.map((item, index) => (
        <li
          key={index}
          className={`flex items-center p-4 cursor-pointer text-sm rounded-lg transition-colors duration-300
            ${activeIndex === index ? 'bg-orange-500 text-white' : 'hover:bg-gray-100'}
          `}
          onClick={() => handleClick(index)}
        >
          <i className={`${item.icon} mr-3 ${activeIndex === index ? 'text-white' : 'text-gray-500'}`}></i>
          {item.label}
        </li>
      ))}
    </ul>
  );
};

const Sidebar = () => {
  return (
    <div className="w-64 bg-white h-full shadow-lg flex flex-col p-6 rounded-lg">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <img src={Logo} alt="Hospital Logo" className="h-20 w-20" />
      </div>
      
      {/* Menu */}
      <Menu />
    </div>
  );
};

export default Sidebar;
