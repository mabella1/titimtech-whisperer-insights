
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Cloud, Monitor, Code, Server, Phone } from 'lucide-react';

const serviceItems = [
  {
    icon: <Shield className="h-10 w-10 text-tech-500" />,
    title: 'Cybersecurity',
    description: 'Protect your business with advanced threat detection, prevention, and response solutions.',
    image: '/lovable-uploads/947119f6-a7d4-4402-86db-4d02f44bfb82.png'
  },
  {
    icon: <Cloud className="h-10 w-10 text-tech-500" />,
    title: 'Cloud Services',
    description: 'Scale your infrastructure with reliable and secure cloud solutions tailored to your needs.',
    image: '/lovable-uploads/dd37a744-5329-47ac-b339-042bf20d807e.png'
  },
  {
    icon: <Monitor className="h-10 w-10 text-tech-500" />,
    title: 'IT Support',
    description: '24/7 technical support and managed services to keep your business running smoothly.',
    image: '/lovable-uploads/ea59812f-459b-4a20-ad63-b0a6854bb001.png'
  },
  {
    icon: <Code className="h-10 w-10 text-tech-500" />,
    title: 'Software Solutions',
    description: 'Custom software development and integration services to streamline your operations.',
    image: '/lovable-uploads/dc592362-8eff-458b-b911-0ef4c923d663.png'
  },
  {
    icon: <Server className="h-10 w-10 text-tech-500" />,
    title: 'Network Infrastructure',
    description: 'Design, implementation, and management of reliable network systems.',
  },
  {
    icon: <Phone className="h-10 w-10 text-tech-500" />,
    title: 'Telecommunications',
    description: 'Modern communication solutions including VoIP and unified communications.',
  },
];

const Services = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive <span className="gradient-text">IT Services</span>
          </h2>
          <p className="text-lg text-gray-600">
            We offer a wide range of technology solutions to meet all your business needs,
            from daily support to strategic planning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <Card key={index} className="border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-tech-100 group">
              {service.image && (
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              )}
              <CardHeader className={service.image ? "pb-2" : ""}>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="text-tech-600 p-0 hover:text-tech-800">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
