import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cloud, Shield, Monitor, Code, TestTube, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Cloud,
      title: t('cloudServices'),
      description: t('cloudServicesDesc'),
      link: '/services/cloud-services',
      image: '/lovable-uploads/8fc30f1c-045b-4b84-8660-0e522e41d4d6.png'
    },
    {
      icon: Shield,
      title: t('cybersecurity'),
      description: t('cybersecurityDesc'),
      link: '/services/cybersecurity',
      image: '/lovable-uploads/947119f6-a7d4-4402-86db-4d02f44bfb82.png'
    },
    {
      icon: Monitor,
      title: t('itSupport'),
      description: t('itSupportDesc'),
      link: '/services/it-support',
      image: '/lovable-uploads/ea59812f-459b-4a20-ad63-b0a6854bb001.png'
    },
    {
      icon: Code,
      title: t('softwareSolutions'),
      description: t('softwareSolutionsDesc'),
      link: '/services/software-solutions',
      image: '/lovable-uploads/dc592362-8eff-458b-b911-0ef4c923d663.png'
    },
    {
      icon: TestTube,
      title: 'QA & Software Testing',
      description: 'Comprehensive testing services to ensure your software quality and reliability.',
      link: '/services/qa-testing',
      image: '/lovable-uploads/73080f5d-a08f-43f6-a9c4-7202f3ece974.png'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics & Business Intelligence',
      description: 'Transform your data into actionable insights with advanced analytics solutions.',
      link: '/services/data-analytics',
      image: '/lovable-uploads/78d1f9df-0134-43d7-a6bb-9e6faccbbe65.png'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('servicesTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('servicesSubtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-tech-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-tech-500 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-tech-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 text-center">
                <Link to={service.link}>
                  <Button variant="outline" className="border-tech-300 text-tech-700 hover:bg-tech-50">
                    {t('learnMore')}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
