
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Server, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const NetworkInfrastructurePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <Link to="/services">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Button>
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Server className="h-16 w-16 text-tech-500 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Network <span className="gradient-text">Infrastructure</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Design, implementation, and management of reliable network systems.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <img 
                  src="/lovable-uploads/73080f5d-a08f-43f6-a9c4-7202f3ece974.png" 
                  alt="Network Infrastructure" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Why Choose Our Network Infrastructure?</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-tech-500 mt-1 flex-shrink-0" />
                    <span>High-performance network design and implementation</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-tech-500 mt-1 flex-shrink-0" />
                    <span>Scalable solutions that grow with your business</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-tech-500 mt-1 flex-shrink-0" />
                    <span>Enhanced security and reliability</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-tech-500 mt-1 flex-shrink-0" />
                    <span>24/7 network monitoring and support</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-6">Our Network Infrastructure Services Include:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Network Design</h4>
                  <p className="text-gray-600">Custom network architecture planning and design.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Installation & Setup</h4>
                  <p className="text-gray-600">Professional installation of network equipment and systems.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Network Security</h4>
                  <p className="text-gray-600">Firewalls, VPNs, and other security measures.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Performance Optimization</h4>
                  <p className="text-gray-600">Network tuning and optimization for maximum performance.</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact">
                <Button size="lg" className="bg-tech-600 hover:bg-tech-700">
                  Get Started with Network Infrastructure
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NetworkInfrastructurePage;
