
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-purple-400 to-tech-400 opacity-30 blur-xl"></div>
              <div className="relative rounded-lg overflow-hidden border border-tech-100 bg-white shadow-xl">
                <img 
                  src="/lovable-uploads/c7a860cf-379d-4d9d-8d72-5b593b5ecb63.png" 
                  alt="Professional IT Workspace" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center rounded-full px-4 py-1 bg-purple-50 border border-purple-100">
              <span className="text-sm font-medium text-purple-700">About Us</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
              Your Trusted Technology <span className="gradient-text">Partner Since 2010</span>
            </h2>
            
            <p className="text-lg text-gray-600 max-w-2xl">
              With over a decade of experience, Titim Tech has been helping businesses
              across industries leverage technology to achieve their goals and overcome challenges.
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="mt-1">
                  <CheckCircle className="h-5 w-5 text-tech-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Expert Team</h3>
                  <p className="text-gray-600">Our team consists of certified IT professionals with extensive industry experience.</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="mt-1">
                  <CheckCircle className="h-5 w-5 text-tech-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Client-focused Approach</h3>
                  <p className="text-gray-600">We prioritize understanding your business needs to deliver tailored solutions.</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="mt-1">
                  <CheckCircle className="h-5 w-5 text-tech-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Proven Track Record</h3>
                  <p className="text-gray-600">We've successfully delivered hundreds of projects with high customer satisfaction.</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <Button className="bg-tech-600 hover:bg-tech-700">
                Learn Our Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
