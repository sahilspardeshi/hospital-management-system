import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Logo from "../../assets/images/Aarohilogo.png";

const Menu = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    { icon: 'fa-solid fa-house', label: 'Dashboard', path: '' },
    { icon: 'fa-solid fa-clipboard', label: 'Appointment Request', path: 'appointment' },
    { icon: 'fa-solid fa-chart-simple', label: 'Tables', path: 'tables' },
    { icon: 'fa-brands fa-slack', label: 'Articles', path: 'articles' },
    { icon: 'fa-solid fa-user', label: 'Profile', path: 'profile' },
    { icon: 'fa-solid fa-lock', label: 'Logout', path: 'logout' },
  ];

  const handleClick = (index, path) => {
    setActiveIndex(index);
    navigate(path); // Navigate to the specified path
  };

  return (
    <ul className="space-y-2">
      {menuItems.map((item, index) => (
        <li
          key={index}
          className={`flex items-center p-4 cursor-pointer text-sm rounded-lg transition-colors duration-300
            ${activeIndex === index ? 'bg-orange-500 text-white' : 'hover:bg-gray-100'}
          `}
          onClick={() => handleClick(index, item.path)} // Pass the path to handleClick
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
