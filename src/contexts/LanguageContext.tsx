
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    home: 'Home',
    services: 'Services',
    about: 'About',
    contact: 'Contact',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    scheduleConsultation: 'Schedule Consultation',
    // Add more translations as needed
  },
  fr: {
    home: 'Accueil',
    services: 'Services',
    about: 'À Propos',
    contact: 'Contact',
    getStarted: 'Commencer',
    learnMore: 'En Savoir Plus',
    scheduleConsultation: 'Planifier une Consultation',
    // Add more translations as needed
  },
  ar: {
    home: 'الرئيسية',
    services: 'الخدمات',
    about: 'حول',
    contact: 'اتصل',
    getStarted: 'ابدأ',
    learnMore: 'اعرف المزيد',
    scheduleConsultation: 'جدولة استشارة',
    // Add more translations as needed
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'} className={language === 'ar' ? 'font-arabic' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
