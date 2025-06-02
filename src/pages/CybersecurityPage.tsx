
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const CybersecurityPage = () => {
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
              <Shield className="h-16 w-16 text-tech-500 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Cyber<span className="gradient-text">security</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Protect your business with advanced threat detection, prevention, and response solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <img 
                  src="/lovable-uploads/947119f6-a7d4-4402-86db-4d02f44bfb82.png" 
                  alt="Cybersecurity" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Why Choose Our Cybersecurity Services?</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-tech-500 mt-1 flex-shrink-0" />
                    <span>Advanced threat detection and prevention</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-tech-500 mt-1 flex-shrink-0" />
                    <span>24/7 security monitoring and response</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-tech-500 mt-1 flex-shrink-0" />
                    <span>Compliance with industry standards</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-tech-500 mt-1 flex-shrink-0" />
                    <span>Regular security assessments and updates</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-6">Our Cybersecurity Services Include:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Threat Detection</h4>
                  <p className="text-gray-600">Advanced monitoring systems to identify potential security threats.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Incident Response</h4>
                  <p className="text-gray-600">Rapid response and recovery services for security incidents.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Security Audits</h4>
                  <p className="text-gray-600">Comprehensive security assessments and vulnerability testing.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Employee Training</h4>
                  <p className="text-gray-600">Security awareness training for your team members.</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact">
                <Button size="lg" className="bg-tech-600 hover:bg-tech-700">
                  Get Started with Cybersecurity
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

export default CybersecurityPage;
