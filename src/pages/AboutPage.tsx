
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import About from '@/components/About';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, Award, Clock, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
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
        <About />
        
        {/* Additional About Content */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Our <span className="gradient-text">Company Values</span>
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                <div className="text-center">
                  <div className="bg-tech-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-tech-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">People First</h3>
                  <p className="text-gray-600 text-sm">
                    We prioritize our team and clients, building lasting relationships based on trust.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-tech-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-tech-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Excellence</h3>
                  <p className="text-gray-600 text-sm">
                    We strive for the highest quality in everything we do, exceeding expectations.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-tech-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-tech-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Reliability</h3>
                  <p className="text-gray-600 text-sm">
                    Our clients can count on us to deliver consistent, dependable service.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-tech-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-tech-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Innovation</h3>
                  <p className="text-gray-600 text-sm">
                    We embrace new technologies and creative solutions to solve complex challenges.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                  To empower businesses with innovative technology solutions that drive growth, 
                  enhance productivity, and create competitive advantages in an ever-evolving digital landscape.
                </p>
                
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the most trusted technology partner for businesses worldwide, recognized 
                  for our expertise, innovation, and unwavering commitment to client success.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
