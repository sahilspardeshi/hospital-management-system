import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../../assets/images/Aarohilogo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 w-full">
      <div className="flex flex-row justify-between space-x-6">
        {/* First Column */}
        <div className="flex flex-col items-center flex-shrink-0 p-4 w-1/4">
          <img className="mb-4 w-16 h-16 " src={logo} alt="Logo" />
          <h2 className="font-bold text-lg">Card Title</h2>
          <p className="text-gray-600 text-sm text-center max-w-xs ">
            Card description. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
        </div>

        {/* Second Column */}
        <div className="flex flex-col space-y-3 flex-shrink-0 p-4 ">
          <p className="text-gray-600">Card title</p>
          <p className="text-gray-600">Card title</p>
          <p className="text-gray-600">Card title</p>
          <p className="text-gray-600">Card title</p>
          <p className="text-gray-600">Card title</p>
          <p className="text-gray-600">Card title</p>
        </div>

        {/* Third Column */}
        <div className="flex flex-col space-y-3 flex-shrink-0 p-4 ">
          <p className="text-gray-600">Card title</p>
          <p className="text-gray-600">Card title</p>
          <p className="text-gray-600">Card title</p>
          <p className="text-gray-600">Card title</p>
          <p className="text-gray-600">Card title</p>
          <p className="text-gray-600">Card title</p>
        </div>

        {/* Fourth Column */}
        <div className="flex flex-col items-center space-y-6 flex-shrink-0 p-4  w-1/4   ">
          <h2 className="font-bold text-lg">Follow Us</h2>
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/your_instagram_username"
              target="_blank">
              <FaFacebookF className="text-gray-600 hover:text-gray-800 cursor-pointer" />
            </a>
            <a href="https://twitter.com/your_twitter_username" target="_blank">
              <FaTwitter className="text-gray-600 hover:text-gray-800 cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/your_instagram_username"
              target="_blank">
              <FaInstagram className="text-gray-600 hover:text-gray-800 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
