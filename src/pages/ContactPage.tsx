
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
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
        <Contact />
        
        {/* Additional Contact Information */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Get in <span className="gradient-text">Touch</span>
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                <div className="text-center">
                  <div className="bg-tech-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-tech-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Address</h3>
                  <p className="text-gray-600 text-sm">
                    123 Tech Street<br />
                    Business District<br />
                    City, State 12345
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-tech-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-tech-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Phone</h3>
                  <p className="text-gray-600 text-sm">
                    Main: (555) 123-4567<br />
                    Support: (555) 123-4568<br />
                    Emergency: (555) 123-4569
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-tech-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-tech-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <p className="text-gray-600 text-sm">
                    info@titimtech.com<br />
                    support@titimtech.com<br />
                    sales@titimtech.com
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-tech-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-tech-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Hours</h3>
                  <p className="text-gray-600 text-sm">
                    Mon-Fri: 8:00 AM - 6:00 PM<br />
                    Sat: 9:00 AM - 4:00 PM<br />
                    24/7 Emergency Support
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6">
                  Schedule a free consultation to discuss your IT needs and learn how 
                  we can help transform your business with technology.
                </p>
                <Button size="lg" className="bg-tech-600 hover:bg-tech-700">
                  Schedule Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
