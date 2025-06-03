
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-tech-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-tech-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              {t('heroTitle')} <span className="gradient-text">{t('heroTitleTech')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-tech-600 hover:bg-tech-700 text-white">
                {t('getStarted')} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-tech-300 text-tech-700 hover:bg-tech-50">
                <Play className="mr-2 h-5 w-5" /> {t('learnMore')}
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/lovable-uploads/7de623e0-f806-4ea8-bbe7-c3202835015a.png" 
                alt="Technology Solutions" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-tech-100 rounded-lg shadow-lg flex items-center justify-center animate-float">
              <div className="w-12 h-12 bg-tech-500 rounded-lg"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-100 rounded-lg shadow-lg flex items-center justify-center animate-float-delayed">
              <div className="w-16 h-16 bg-accent-500 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
