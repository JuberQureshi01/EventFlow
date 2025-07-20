import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-[#1a1a1a] text-white py-[60px] px-4">
      <div className="max-w-7xl mx-auto">
        <div className="footer-content grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div className="footer-brand col-span-1">
            <h3 className="text-2xl mb-4 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent font-bold">
              EventFlow
            </h3>
            <p className="text-[#a0a0a0] leading-relaxed">
              Connecting you with amazing experiences worldwide.
            </p>
          </div>

          <div className="footer-links col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="link-group">
              <h4 className="mb-4 font-semibold">Platform</h4>
              <Link to="#" className="text-[#a0a0a0] hover:text-red-600 block mb-2">Browse Events</Link>
              <Link to="#" className="text-[#a0a0a0] hover:text-red-600 block mb-2">For Organizers</Link>
              <Link to="#" className="text-[#a0a0a0] hover:text-red-600 block mb-2">Mobile App</Link>
            </div>
            <div className="link-group">
              <h4 className="mb-4 font-semibold">Support</h4>
              <Link to="#" className="text-[#a0a0a0] hover:text-red-600 block mb-2">Help Center</Link>
              <Link to="#" className="text-[#a0a0a0] hover:text-red-600 block mb-2">Contact Us</Link>
              <Link to="#" className="text-[#a0a0a0] hover:text-red-600 block mb-2">Refund Policy</Link>
            </div>
            <div className="link-group">
              <h4 className="mb-4 font-semibold">Company</h4>
              <Link to="#" className="text-[#a0a0a0] hover:text-red-600 block mb-2">About Us</Link>
              <Link to="#" className="text-[#a0a0a0] hover:text-red-600 block mb-2">Careers</Link>
              <Link to="#" className="text-[#a0a0a0] hover:text-red-600 block mb-2">Press</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom border-t border-[#333] pt-6 text-center text-[#a0a0a0]">
          <p>&copy; 2024 EventFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
