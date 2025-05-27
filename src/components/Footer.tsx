import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return <footer className="bg-obsidian text-gold py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                <span className="text-forest font-playfair font-bold text-xl">A</span>
              </div>
              <span className="text-gold font-montserrat font-bold text-xl">The Art</span>
            </div>
            <p className="text-gray-400 font-montserrat max-w-md mb-6">
              Premium barbershop specializing in Afro-centric cuts, fades, and grooming. 
              Experience the art of barbering at its finest.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-forest rounded-full flex items-center justify-center hover:bg-gold hover:text-forest transition-colors duration-300 cursor-pointer">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-forest rounded-full flex items-center justify-center hover:bg-gold hover:text-forest transition-colors duration-300 cursor-pointer">
                <span className="text-sm font-bold">ig</span>
              </div>
              <div className="w-10 h-10 bg-forest rounded-full flex items-center justify-center hover:bg-gold hover:text-forest transition-colors duration-300 cursor-pointer">
                <span className="text-sm font-bold">TiK</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-montserrat font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Gallery', 'Services', 'Contact'].map(item => <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-gray-400 hover:text-gold transition-colors duration-300 font-montserrat">
                    {item}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-montserrat font-semibold text-lg mb-6">Contact</h3>
            <div className="space-y-3 text-gray-400 font-montserrat">
              <p>123 Style Street<br />Urban District<br />City, State 12345</p>
              <p>Phone: 0966888688</p>
              <p>Email: info@theart.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 font-montserrat text-sm mb-4 md:mb-0">
            © 2024 The Art Barbershop. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="#" className="text-gray-400 hover:text-gold transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-400 hover:text-gold transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;