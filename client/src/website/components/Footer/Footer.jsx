import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/images/Aarohilogo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 w-full py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Company Info Column */}
        <div className="flex flex-col items-center lg:items-start space-y-4 p-4">
          <img className="w-16 h-16" src={logo} alt="Logo" />
          <h2 className="font-bold text-lg">Your SaaS Company</h2>
          <p className="text-gray-600 text-sm text-center lg:text-left max-w-xs">
            Revolutionizing healthcare management with intuitive and powerful software solutions.
          </p>
        </div>

        {/* Useful Links Column */}
        <div className="flex flex-col space-y-3 p-4">
          <h2 className="font-bold text-lg">Useful Links</h2>
          <a href="#features" className="text-gray-600 hover:text-gray-800">Features</a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-800">Pricing</a>
          <a href="#about" className="text-gray-600 hover:text-gray-800">About Us</a>
          <a href="#careers" className="text-gray-600 hover:text-gray-800">Careers</a>
          <a href="#faq" className="text-gray-600 hover:text-gray-800">FAQ</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-800">Contact Us</a>
        </div>

        {/* Contact Info Column */}
        <div className="flex flex-col space-y-3 p-4">
          <h2 className="font-bold text-lg">Contact Us</h2>
          <p className="text-gray-600">Phone: +1 (123) 456-7890</p>
          <p className="text-gray-600">Email: support@saascompany.com</p>
          <p className="text-gray-600">Address: 123 SaaS Street, Tech City, USA</p>
        </div>

        {/* Newsletter and Social Media Column */}
        <div className="flex flex-col items-center lg:items-start space-y-6 p-4">
          <h2 className="font-bold text-lg">Stay Updated</h2>
          <p className="text-gray-600">Subscribe to our newsletter for the latest updates.</p>
          <form className="flex space-x-2">
            <input
              type="email"
              className="border border-gray-300 p-2 rounded-lg"
              placeholder="Enter your email"
            />
            <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
              Subscribe
            </button>
          </form>

          <h2 className="font-bold text-lg mt-6">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/your_facebook_username"
              target="_blank" rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-gray-600 hover:text-gray-800 cursor-pointer" />
            </a>
            <a
              href="https://twitter.com/your_twitter_username"
              target="_blank" rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter className="text-gray-600 hover:text-gray-800 cursor-pointer" />
            </a>
            <a
              href="https://www.instagram.com/your_instagram_username"
              target="_blank" rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="text-gray-600 hover:text-gray-800 cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/your_linkedin_username"
              target="_blank" rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-gray-600 hover:text-gray-800 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300 mt-8 py-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">&copy; {new Date().getFullYear()} Your SaaS Company. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <a href="#privacy-policy" className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
            <a href="#terms" className="text-gray-600 hover:text-gray-800">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
