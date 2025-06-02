import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'About',
    path: '/about'
  }, {
    name: 'Gallery',
    path: '/gallery'
  }, {
    name: 'Services',
    path: '/services'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  const handleBookNow = () => {
    navigate('/contact');
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Official Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img src="/lovable-uploads/fb01ca19-0340-4e03-8f65-cf04865664d6.png" alt="The Art Barbershop Logo" className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300" />
            <span className="text-obsidian font-montserrat font-bold text-xl hidden sm:block">The Art</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <Link key={item.path} to={item.path} className={`relative font-montserrat font-medium transition-colors duration-300 hover:text-sage ${location.pathname === item.path ? 'text-sage' : 'text-obsidian'} group`}>
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-sage transition-all duration-300 group-hover:w-full ${location.pathname === item.path ? 'w-full' : ''}`}></span>
              </Link>)}
            <Button onClick={handleBookNow} className="text-white font-montserrat font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 bg-[#173d26]">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden flex flex-col space-y-1 group">
            <span className={`w-6 h-0.5 bg-sage transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-sage transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-sage transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
          <div className="flex flex-col space-y-4 pt-4">
            {navItems.map(item => <Link key={item.path} to={item.path} onClick={() => setIsMobileMenuOpen(false)} className={`font-montserrat font-medium transition-colors duration-300 hover:text-sage ${location.pathname === item.path ? 'text-sage' : 'text-obsidian'}`}>
                {item.name}
              </Link>)}
            <Button onClick={() => {
            handleBookNow();
            setIsMobileMenuOpen(false);
          }} className="bg-sage text-white hover:bg-sage/90 font-montserrat font-semibold w-fit px-6 py-2 rounded-full">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navigation;