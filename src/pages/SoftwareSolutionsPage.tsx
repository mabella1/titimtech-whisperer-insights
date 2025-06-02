
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Code, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const SoftwareSolutionsPage = () => {
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
              <Code className="h-16 w-16 text-tech-500 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Software <span className="gradient-text">Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Custom software development and integration services to streamline your operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <img 
                  src="/lovable-uploads/dc592362-8eff-458b-b911-0ef4c923d663.png" 
                  alt="Software Solutions" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Why Choose Our Software Solutions?</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-tech-500 mt-1 flex-shrink-0" />
                    <span>Custom development tailored to your needs</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-tech-500 mt-1 flex-shrink-0" />
                    <span>Modern technologies and best practices</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-tech-500 mt-1 flex-shrink-0" />
                    <span>Seamless integration with existing systems</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-tech-500 mt-1 flex-shrink-0" />
                    <span>Ongoing support and maintenance</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-6">Our Software Solutions Include:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Custom Applications</h4>
                  <p className="text-gray-600">Bespoke software applications for your specific requirements.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">System Integration</h4>
                  <p className="text-gray-600">Connect different systems and streamline workflows.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">API Development</h4>
                  <p className="text-gray-600">RESTful APIs for seamless data exchange.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Legacy Modernization</h4>
                  <p className="text-gray-600">Upgrade and modernize your existing software systems.</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact">
                <Button size="lg" className="bg-tech-600 hover:bg-tech-700">
                  Get Started with Software Solutions
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

export default SoftwareSolutionsPage;
