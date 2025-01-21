import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = ({ year = new Date().getFullYear() }) => {
  return (
    <footer className="px-6 py-8 bg-[#031220]/90">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-items-center">
          {/* About Section */}
          <div className="col-span-1">
            <h2 className="text-2xl font-bold mb-4 text-white">AquaLuxe</h2>
            <p className="text-white mb-4">
              Join our community for the latest updates, exclusive offers, and events
              happening at our hotel. Explore our services and enjoy a memorable
              experience with us.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-600">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-blue-600">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-blue-600">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-blue-600">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Address Section */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4 text-white">Address</h3>
            <address className="text-white not-italic">
              AquaLuxe Resort,<br />
              123 Oceanview Drive,<br />
              Beachside,<br />
              United States
            </address>
          </div>

          {/* Pages Section */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4 text-white">Pages</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-blue-600">Home</a></li>
              <li><a href="#" className="text-white hover:text-blue-600">Rooms</a></li>
              <li><a href="#" className="text-white hover:text-blue-600">Gallery</a></li>
              <li><a href="#" className="text-white hover:text-blue-600">Wedding & Events</a></li>
            </ul>
          </div>

          {/* Help & Support Section */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4 text-white">Help & Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-blue-600">FAQ</a></li>
              <li><a href="#" className="text-white hover:text-blue-600">Customer Support</a></li>
              <li><a href="#" className="text-white hover:text-blue-600">Terms & Conditions</a></li>
              <li><a href="#" className="text-white hover:text-blue-600">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-8 border-t border-gray-200">
          <p className="text-white">
            Copyright {year} @AquaLuxe All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
