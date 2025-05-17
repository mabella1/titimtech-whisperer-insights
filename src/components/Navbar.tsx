
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="font-bold text-2xl gradient-text">TitimTech</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick('home')} 
              className="text-gray-700 hover:text-tech-600 font-medium transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('services')} 
              className="text-gray-700 hover:text-tech-600 font-medium transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => handleNavClick('about')} 
              className="text-gray-700 hover:text-tech-600 font-medium transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('contact')} 
              className="text-gray-700 hover:text-tech-600 font-medium transition-colors"
            >
              Contact
            </button>
            <Button className="bg-tech-600 hover:bg-tech-700">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-tech-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button 
                onClick={() => handleNavClick('home')} 
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-tech-600 hover:bg-gray-50"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('services')} 
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-tech-600 hover:bg-gray-50"
              >
                Services
              </button>
              <button 
                onClick={() => handleNavClick('about')} 
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-tech-600 hover:bg-gray-50"
              >
                About
              </button>
              <button 
                onClick={() => handleNavClick('contact')} 
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-tech-600 hover:bg-gray-50"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <Button className="w-full bg-tech-600 hover:bg-tech-700">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
