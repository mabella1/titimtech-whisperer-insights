
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24">
        <div className="container px-4 sm:px-6 lg:px-8 mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
        <Services />
        
        {/* Additional Services Content */}
        <section className="py-16 bg-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Choose Our <span className="gradient-text">IT Services?</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">24/7 Support</h3>
                  <p className="text-gray-600">
                    Our dedicated support team is available around the clock to ensure your 
                    business never experiences downtime.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Scalable Solutions</h3>
                  <p className="text-gray-600">
                    Our services grow with your business, providing flexible solutions 
                    that adapt to your changing needs.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Industry Expertise</h3>
                  <p className="text-gray-600">
                    Our team has deep knowledge across various industries, ensuring 
                    we understand your specific challenges.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Cost-Effective</h3>
                  <p className="text-gray-600">
                    We provide enterprise-level solutions at competitive prices, 
                    maximizing your technology investment.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-tech-600 hover:bg-tech-700">
                    Get Started Today
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
