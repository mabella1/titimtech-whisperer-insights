
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Cloud, Desktop, Code, Server, Phone } from 'lucide-react';

const serviceItems = [
  {
    icon: <Shield className="h-10 w-10 text-tech-500" />,
    title: 'Cybersecurity',
    description: 'Protect your business with advanced threat detection, prevention, and response solutions.',
  },
  {
    icon: <Cloud className="h-10 w-10 text-tech-500" />,
    title: 'Cloud Services',
    description: 'Scale your infrastructure with reliable and secure cloud solutions tailored to your needs.',
  },
  {
    icon: <Desktop className="h-10 w-10 text-tech-500" />,
    title: 'IT Support',
    description: '24/7 technical support and managed services to keep your business running smoothly.',
  },
  {
    icon: <Code className="h-10 w-10 text-tech-500" />,
    title: 'Software Solutions',
    description: 'Custom software development and integration services to streamline your operations.',
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
    <section id="services" className="section-padding bg-gray-50">
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
            <Card key={index} className="border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-tech-100">
              <CardHeader>
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
