
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CallToAction = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-r from-tech-600 to-tech-700">
      <div className="container px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {t('readyToStart')}
        </h2>
        <p className="text-xl text-tech-100 mb-8 max-w-2xl mx-auto">
          {t('scheduleConsultationText')}
        </p>
        <Button 
          size="lg" 
          className="bg-white text-tech-600 hover:bg-gray-100 hover:text-tech-700"
        >
          {t('scheduleConsultation')} <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
