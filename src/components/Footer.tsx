
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-obsidian text-gold py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand with Official Logo */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/fb01ca19-0340-4e03-8f65-cf04865664d6.png" 
                alt="The Art Barbershop Logo" 
                className="w-16 h-16 object-contain"
              />
              <span className="text-gold font-montserrat font-bold text-2xl">The Art</span>
            </div>
            <p className="text-gray-400 font-montserrat max-w-md mb-6">
              Premium barbershop specializing in Afro-centric cuts, fades, and grooming. 
              Experience the art of barbering at its finest.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-forest rounded-full flex items-center justify-center hover:bg-gold hover:text-forest transition-colors duration-300 cursor-pointer group"
              >
                <Facebook className="h-6 w-6 text-gold group-hover:text-forest transition-colors duration-300" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-forest rounded-full flex items-center justify-center hover:bg-gold hover:text-forest transition-colors duration-300 cursor-pointer group"
              >
                <Instagram className="h-6 w-6 text-gold group-hover:text-forest transition-colors duration-300" />
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-forest rounded-full flex items-center justify-center hover:bg-gold hover:text-forest transition-colors duration-300 cursor-pointer group"
              >
                <svg className="h-6 w-6 text-gold group-hover:text-forest transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
              <a 
                href="https://telegram.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-forest rounded-full flex items-center justify-center hover:bg-gold hover:text-forest transition-colors duration-300 cursor-pointer group"
              >
                <svg className="h-6 w-6 text-gold group-hover:text-forest transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0011.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-montserrat font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Gallery', 'Services', 'Contact'].map(item => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-gold transition-colors duration-300 font-montserrat"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-montserrat font-semibold text-lg mb-6">Contact</h3>
            <div className="space-y-3 text-gray-400 font-montserrat">
              <p>123 Style Street<br />Urban District<br />City, State 12345</p>
              <p>Phone: 0966888688</p>
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
    </footer>
  );
};

export default Footer;
