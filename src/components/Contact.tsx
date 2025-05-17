
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Contact form submitted');
  };

  return (
    <section id="contact" className="section-padding bg-tech-50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-gray-600">
            Have questions about our services or want to discuss your IT needs? Contact us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    required 
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    required 
                    className="w-full" 
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <Input 
                  id="subject" 
                  placeholder="How can we help you?" 
                  required 
                  className="w-full" 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Please provide details about your inquiry..." 
                  rows={5} 
                  required 
                  className="w-full" 
                />
              </div>
              <Button type="submit" className="w-full bg-tech-600 hover:bg-tech-700">
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-tech-100 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-tech-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Email Address</p>
                    <p className="text-gray-600">info@titimtech.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-tech-100 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-tech-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone Number</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-tech-100 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-tech-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Office Location</p>
                    <p className="text-gray-600">123 Tech Avenue, Suite 100<br/>San Francisco, CA 94103</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-semibold">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-semibold">9:00 AM - 3:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
            </div>
            
            <div>
              <p className="text-gray-600">For urgent technical support outside of business hours, please call our 24/7 support line or submit a ticket through our client portal.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
