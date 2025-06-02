
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Monitor, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const ITSupportPage = () => {
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
              <Monitor className="h-16 w-16 text-tech-500 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                IT <span className="gradient-text">Support</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                24/7 technical support and managed services to keep your business running smoothly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <img 
                  src="/lovable-uploads/ea59812f-459b-4a20-ad63-b0a6854bb001.png" 
                  alt="IT Support" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Why Choose Our IT Support?</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-tech-500 mt-1 flex-shrink-0" />
                    <span>Round-the-clock technical assistance</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-tech-500 mt-1 flex-shrink-0" />
                    <span>Proactive system monitoring and maintenance</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-tech-500 mt-1 flex-shrink-0" />
                    <span>Fast response times and issue resolution</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-tech-500 mt-1 flex-shrink-0" />
                    <span>Experienced technical specialists</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-6">Our IT Support Services Include:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Help Desk Support</h4>
                  <p className="text-gray-600">Technical assistance for users and system issues.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">System Monitoring</h4>
                  <p className="text-gray-600">Continuous monitoring of your IT infrastructure.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Maintenance Services</h4>
                  <p className="text-gray-600">Regular updates and preventive maintenance.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Remote Support</h4>
                  <p className="text-gray-600">Quick issue resolution through remote access.</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact">
                <Button size="lg" className="bg-tech-600 hover:bg-tech-700">
                  Get Started with IT Support
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

export default ITSupportPage;
