
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/lovable-uploads/11ffb61c-3296-45cc-b0a4-097b75630e5d.png" 
                alt="TitimTech Logo" 
                className="h-8 mb-2 brightness-150 contrast-125"
              />
            </Link>
            <p className="mb-4">
              Empowering businesses with innovative IT solutions and support services
              tailored to meet your unique needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-tech-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-tech-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-tech-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-tech-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-tech-400 transition-colors">Cybersecurity</a></li>
              <li><a href="#" className="hover:text-tech-400 transition-colors">Cloud Services</a></li>
              <li><a href="#" className="hover:text-tech-400 transition-colors">IT Support</a></li>
              <li><a href="#" className="hover:text-tech-400 transition-colors">Software Solutions</a></li>
              <li><a href="#" className="hover:text-tech-400 transition-colors">Network Infrastructure</a></li>
              <li><a href="#" className="hover:text-tech-400 transition-colors">Telecommunications</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-tech-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-tech-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-tech-400 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-tech-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-tech-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-tech-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>123 Tech Avenue, Suite 100</li>
              <li>San Francisco, CA 94103</li>
              <li className="pt-2">+1 (555) 123-4567</li>
              <li>info@titimtech.com</li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} TitimTech. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-tech-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-tech-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-tech-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
