import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/images/Aarohilogo.png";

const Menu = ({ menuItems }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Initialize activeIndex from localStorage or default to 0
  const [activeIndex, setActiveIndex] = useState(() => {
    // Check if activeIndex exists in localStorage and set it to the stored value, else default to 0
    const savedIndex = localStorage.getItem("activeIndex");
    return savedIndex ? parseInt(savedIndex, 10) : 0;
  });

  useEffect(() => {
    // Find the index of the current path in menuItems
    const currentIndex = menuItems.findIndex(item => item.path === location.pathname);
    if (currentIndex !== -1) setActiveIndex(currentIndex);
  }, [location.pathname, menuItems]);

  const handleClick = (index, path) => {
    setActiveIndex(index);
    navigate(path);
    localStorage.setItem("activeIndex", index); // Save the index in localStorage
  };

  return (
    <ul className="space-y-2">
      {menuItems?.map((item, index) => (
        <li
          key={index}
          className={`flex items-center p-4 cursor-pointer text-sm rounded-lg transition-colors duration-300
            ${activeIndex === index ? 'bg-orange-500 text-white' : 'hover:bg-gray-100'}
          `}
          onClick={() => handleClick(index, item.path)}
        >
          <i className={`${item.icon} mr-3 ${activeIndex === index ? 'text-white' : 'text-gray-500'}`}></i>
          {item.label}
        </li>
      ))}
    </ul>
  );
};

const Sidebar = ({ menuItems }) => {
  return (
    <div className="w-64 bg-white h-full shadow-lg flex flex-col p-6 rounded-lg">
      <div className="flex justify-center mb-6">
        <img src={Logo} alt="Hospital Logo" className="h-20 w-20" />
      </div>
      <Menu menuItems={menuItems} />
    </div>
  );
};

export default Sidebar;
