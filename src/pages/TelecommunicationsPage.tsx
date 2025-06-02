
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Phone, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const TelecommunicationsPage = () => {
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
              <Phone className="h-16 w-16 text-tech-500 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Telecom<span className="gradient-text">munications</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Modern communication solutions including VoIP and unified communications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <img 
                  src="/lovable-uploads/78d1f9df-0134-43d7-a6bb-9e6faccbbe65.png" 
                  alt="Telecommunications" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Why Choose Our Telecommunications?</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-tech-500 mt-1 flex-shrink-0" />
                    <span>Crystal clear voice quality and reliability</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-tech-500 mt-1 flex-shrink-0" />
                    <span>Cost-effective communication solutions</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-tech-500 mt-1 flex-shrink-0" />
                    <span>Unified communications platform</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-tech-500 mt-1 flex-shrink-0" />
                    <span>Scalable systems for growing businesses</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-6">Our Telecommunications Services Include:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">VoIP Solutions</h4>
                  <p className="text-gray-600">Voice over IP systems for modern business communication.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Unified Communications</h4>
                  <p className="text-gray-600">Integrated voice, video, and messaging platforms.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Video Conferencing</h4>
                  <p className="text-gray-600">High-quality video communication solutions.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Phone Systems</h4>
                  <p className="text-gray-600">Traditional and digital phone system installation.</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact">
                <Button size="lg" className="bg-tech-600 hover:bg-tech-700">
                  Get Started with Telecommunications
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

export default TelecommunicationsPage;
