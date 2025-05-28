
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 space-y-6 animate-fade-in">
            <div className="inline-flex items-center rounded-full px-4 py-1 bg-blue-50 border border-blue-100">
              <span className="text-sm font-medium text-tech-700">Trusted IT Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              Empower Your Business With Modern <span className="gradient-text">IT Solutions</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl text-balance">
              We provide tailored technology services to help your business grow, 
              increase efficiency, and stay ahead of the competition.
            </p>
            
            <div className="pt-4 space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-tech-500" />
                <span className="text-gray-700">Dedicated IT Support & Managed Services</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-tech-500" />
                <span className="text-gray-700">Cybersecurity & Data Protection</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-tech-500" />
                <span className="text-gray-700">Cloud Solutions & Infrastructure</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-tech-600 hover:bg-tech-700">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-tech-200 hover:bg-tech-50">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 animate-slide-up">
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-tech-400 to-purple-400 opacity-30 blur-xl"></div>
              <div className="relative rounded-lg overflow-hidden border border-tech-100 bg-white shadow-xl">
                <img 
                  src="/lovable-uploads/7de623e0-f806-4ea8-bbe7-c3202835015a.png" 
                  alt="IT Team Collaboration" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
