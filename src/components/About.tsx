
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Clock, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Users,
      title: t('peopleFirst'),
      description: t('peopleFirstDesc')
    },
    {
      icon: Award,
      title: t('excellence'),
      description: t('excellenceDesc')
    },
    {
      icon: Clock,
      title: t('reliability'),
      description: t('reliabilityDesc')
    },
    {
      icon: Globe,
      title: t('innovation'),
      description: t('innovationDesc')
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('aboutTitle')}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('aboutDescription')}
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">{t('ourMission')}</h3>
                <p className="text-gray-600">
                  {t('missionText')}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">{t('ourVision')}</h3>
                <p className="text-gray-600">
                  {t('visionText')}
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-tech-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-tech-600" />
                  </div>
                  <h4 className="font-semibold mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
