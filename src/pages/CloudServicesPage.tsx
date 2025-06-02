
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Cloud, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const CloudServicesPage = () => {
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
              <Cloud className="h-16 w-16 text-tech-500 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Cloud <span className="gradient-text">Services</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Scale your infrastructure with reliable and secure cloud solutions tailored to your needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <img 
                  src="/lovable-uploads/dd37a744-5329-47ac-b339-042bf20d807e.png" 
                  alt="Cloud Services" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Why Choose Our Cloud Services?</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-tech-500 mt-1 flex-shrink-0" />
                    <span>Scalable infrastructure that grows with your business</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-tech-500 mt-1 flex-shrink-0" />
                    <span>99.9% uptime guarantee with redundant systems</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-tech-500 mt-1 flex-shrink-0" />
                    <span>Advanced security measures and compliance</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-tech-500 mt-1 flex-shrink-0" />
                    <span>24/7 monitoring and support</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-6">Our Cloud Services Include:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Infrastructure as a Service (IaaS)</h4>
                  <p className="text-gray-600">Virtual servers, storage, and networking resources on-demand.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Platform as a Service (PaaS)</h4>
                  <p className="text-gray-600">Development platforms and tools for building applications.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Software as a Service (SaaS)</h4>
                  <p className="text-gray-600">Ready-to-use software applications accessible via the web.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Cloud Migration</h4>
                  <p className="text-gray-600">Seamless transition from on-premises to cloud infrastructure.</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact">
                <Button size="lg" className="bg-tech-600 hover:bg-tech-700">
                  Get Started with Cloud Services
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

export default CloudServicesPage;
