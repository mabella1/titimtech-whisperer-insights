
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cloud, Shield, Monitor, Code, Network, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Cloud,
      title: t('cloudServices'),
      description: t('cloudServicesDesc'),
      link: '/services/cloud-services'
    },
    {
      icon: Shield,
      title: t('cybersecurity'),
      description: t('cybersecurityDesc'),
      link: '/services/cybersecurity'
    },
    {
      icon: Monitor,
      title: t('itSupport'),
      description: t('itSupportDesc'),
      link: '/services/it-support'
    },
    {
      icon: Code,
      title: t('softwareSolutions'),
      description: t('softwareSolutionsDesc'),
      link: '/services/software-solutions'
    },
    {
      icon: Network,
      title: t('networkInfrastructure'),
      description: t('networkInfrastructureDesc'),
      link: '/services/network-infrastructure'
    },
    {
      icon: Phone,
      title: t('telecommunications'),
      description: t('telecommunicationsDesc'),
      link: '/services/telecommunications'
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
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
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
