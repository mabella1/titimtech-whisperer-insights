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
    // Navigation
    home: 'Home',
    services: 'Services',
    about: 'About',
    contact: 'Contact',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    scheduleConsultation: 'Schedule Consultation',
    backToHome: 'Back to Home',
    backToServices: 'Back to Services',
    
    // Hero Section
    heroTitle: 'Transform Your Business with',
    heroTitleTech: 'Technology',
    heroSubtitle: 'We provide cutting-edge IT solutions to help your business thrive in the digital age.',
    
    // Services
    servicesTitle: 'Our Services',
    servicesSubtitle: 'Comprehensive IT solutions tailored to your business needs',
    cloudServices: 'Cloud Services',
    cloudServicesDesc: 'Scalable cloud infrastructure and migration services',
    cybersecurity: 'Cybersecurity',
    cybersecurityDesc: 'Protect your business with advanced security solutions',
    itSupport: 'IT Support',
    itSupportDesc: '24/7 technical support and managed services',
    softwareSolutions: 'Software Solutions',
    softwareSolutionsDesc: 'Custom software development and integration',
    networkInfrastructure: 'Network Infrastructure',
    networkInfrastructureDesc: 'Design and implementation of robust network systems',
    telecommunications: 'Telecommunications',
    telecommunicationsDesc: 'Modern communication solutions including VoIP',
    
    // About Section
    aboutTitle: 'About TitimTech',
    aboutDescription: 'With over a decade of experience in the IT industry, TitimTech has been at the forefront of technological innovation.',
    ourMission: 'Our Mission',
    ourVision: 'Our Vision',
    missionText: 'To empower businesses with innovative technology solutions that drive growth, enhance productivity, and create competitive advantages in an ever-evolving digital landscape.',
    visionText: 'To be the most trusted technology partner for businesses worldwide, recognized for our expertise, innovation, and unwavering commitment to client success.',
    
    // Contact
    contactTitle: 'Contact Us',
    contactSubtitle: 'Get in touch with our team of experts',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    sendMessage: 'Send Message',
    address: 'Address',
    phone: 'Phone',
    hours: 'Hours',
    
    // Common
    whyChoose: 'Why Choose Our',
    getStartedWith: 'Get Started with',
    includedServices: 'Services Include',
    readyToStart: 'Ready to Get Started?',
    scheduleConsultationText: 'Schedule a free consultation to discuss your IT needs and learn how we can help transform your business with technology.',
    
    // Values
    peopleFirst: 'People First',
    excellence: 'Excellence',
    reliability: 'Reliability',
    innovation: 'Innovation',
    peopleFirstDesc: 'We prioritize our team and clients, building lasting relationships based on trust.',
    excellenceDesc: 'We strive for the highest quality in everything we do, exceeding expectations.',
    reliabilityDesc: 'Our clients can count on us to deliver consistent, dependable service.',
    innovationDesc: 'We embrace new technologies and creative solutions to solve complex challenges.',
  },
  fr: {
    // Navigation
    home: 'Accueil',
    services: 'Services',
    about: 'À Propos',
    contact: 'Contact',
    getStarted: 'Commencer',
    learnMore: 'En Savoir Plus',
    scheduleConsultation: 'Planifier une Consultation',
    backToHome: 'Retour à l\'accueil',
    backToServices: 'Retour aux Services',
    
    // Hero Section
    heroTitle: 'Transformez Votre Entreprise avec la',
    heroTitleTech: 'Technologie',
    heroSubtitle: 'Nous fournissons des solutions informatiques de pointe pour aider votre entreprise à prospérer à l\'ère numérique.',
    
    // Services
    servicesTitle: 'Nos Services',
    servicesSubtitle: 'Solutions informatiques complètes adaptées aux besoins de votre entreprise',
    cloudServices: 'Services Cloud',
    cloudServicesDesc: 'Infrastructure cloud évolutive et services de migration',
    cybersecurity: 'Cybersécurité',
    cybersecurityDesc: 'Protégez votre entreprise avec des solutions de sécurité avancées',
    itSupport: 'Support Informatique',
    itSupportDesc: 'Support technique 24/7 et services gérés',
    softwareSolutions: 'Solutions Logicielles',
    softwareSolutionsDesc: 'Développement et intégration de logiciels personnalisés',
    networkInfrastructure: 'Infrastructure Réseau',
    networkInfrastructureDesc: 'Conception et mise en œuvre de systèmes réseau robustes',
    telecommunications: 'Télécommunications',
    telecommunicationsDesc: 'Solutions de communication modernes incluant la VoIP',
    
    // About Section
    aboutTitle: 'À Propos de TitimTech',
    aboutDescription: 'Avec plus d\'une décennie d\'expérience dans l\'industrie informatique, TitimTech a été à l\'avant-garde de l\'innovation technologique.',
    ourMission: 'Notre Mission',
    ourVision: 'Notre Vision',
    missionText: 'Autonomiser les entreprises avec des solutions technologiques innovantes qui favorisent la croissance, améliorent la productivité et créent des avantages concurrentiels dans un paysage numérique en constante évolution.',
    visionText: 'Être le partenaire technologique le plus fiable pour les entreprises du monde entier, reconnu pour notre expertise, notre innovation et notre engagement inébranlable envers le succès client.',
    
    // Contact
    contactTitle: 'Contactez-Nous',
    contactSubtitle: 'Prenez contact avec notre équipe d\'experts',
    name: 'Nom',
    email: 'Email',
    message: 'Message',
    sendMessage: 'Envoyer le Message',
    address: 'Adresse',
    phone: 'Téléphone',
    hours: 'Heures',
    
    // Common
    whyChoose: 'Pourquoi Choisir Notre',
    getStartedWith: 'Commencer avec',
    includedServices: 'Services Inclus',
    readyToStart: 'Prêt à Commencer?',
    scheduleConsultationText: 'Planifiez une consultation gratuite pour discuter de vos besoins informatiques et découvrir comment nous pouvons aider à transformer votre entreprise avec la technologie.',
    
    // Values
    peopleFirst: 'Les Gens d\'Abord',
    excellence: 'Excellence',
    reliability: 'Fiabilité',
    innovation: 'Innovation',
    peopleFirstDesc: 'Nous priorisons notre équipe et nos clients, construisant des relations durables basées sur la confiance.',
    excellenceDesc: 'Nous visons la plus haute qualité dans tout ce que nous faisons, dépassant les attentes.',
    reliabilityDesc: 'Nos clients peuvent compter sur nous pour fournir un service cohérent et fiable.',
    innovationDesc: 'Nous adoptons les nouvelles technologies et les solutions créatives pour résoudre les défis complexes.',
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    services: 'الخدمات',
    about: 'حول',
    contact: 'اتصل',
    getStarted: 'ابدأ',
    learnMore: 'اعرف المزيد',
    scheduleConsultation: 'جدولة استشارة',
    backToHome: 'العودة للرئيسية',
    backToServices: 'العودة للخدمات',
    
    // Hero Section
    heroTitle: 'حول شركتك باستخدام',
    heroTitleTech: 'التكنولوجيا',
    heroSubtitle: 'نحن نقدم حلول تقنية متطورة لمساعدة شركتك على الازدهار في العصر الرقمي.',
    
    // Services
    servicesTitle: 'خدماتنا',
    servicesSubtitle: 'حلول تقنية شاملة مصممة لتناسب احتياجات شركتك',
    cloudServices: 'الخدمات السحابية',
    cloudServicesDesc: 'بنية تحتية سحابية قابلة للتوسع وخدمات الهجرة',
    cybersecurity: 'الأمن السيبراني',
    cybersecurityDesc: 'احم شركتك بحلول أمنية متقدمة',
    itSupport: 'الدعم التقني',
    itSupportDesc: 'دعم تقني على مدار الساعة وخدمات مُدارة',
    softwareSolutions: 'حلول البرمجيات',
    softwareSolutionsDesc: 'تطوير وتكامل البرمجيات المخصصة',
    networkInfrastructure: 'البنية التحتية للشبكات',
    networkInfrastructureDesc: 'تصميم وتنفيذ أنظمة شبكات قوية',
    telecommunications: 'الاتصالات',
    telecommunicationsDesc: 'حلول اتصالات حديثة تشمل VoIP',
    
    // About Section
    aboutTitle: 'حول TitimTech',
    aboutDescription: 'مع أكثر من عقد من الخبرة في صناعة تقنية المعلومات، كانت TitimTech في مقدمة الابتكار التكنولوجي.',
    ourMission: 'مهمتنا',
    ourVision: 'رؤيتنا',
    missionText: 'تمكين الشركات بحلول تقنية مبتكرة تدفع النمو وتعزز الإنتاجية وتخلق مزايا تنافسية في المشهد الرقمي المتطور.',
    visionText: 'أن نكون الشريك التقني الأكثر ثقة للشركات في جميع أنحاء العالم، معترف بخبرتنا وابتكارنا والتزامنا الثابت بنجاح العملاء.',
    
    // Contact
    contactTitle: 'اتصل بنا',
    contactSubtitle: 'تواصل مع فريق الخبراء لدينا',
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    message: 'الرسالة',
    sendMessage: 'أرسل الرسالة',
    address: 'العنوان',
    phone: 'الهاتف',
    hours: 'ساعات العمل',
    
    // Common
    whyChoose: 'لماذا تختار',
    getStartedWith: 'ابدأ مع',
    includedServices: 'الخدمات المشمولة',
    readyToStart: 'مستعد للبدء؟',
    scheduleConsultationText: 'جدول استشارة مجانية لمناقشة احتياجاتك التقنية وتعلم كيف يمكننا مساعدة تحويل شركتك بالتكنولوجيا.',
    
    // Values
    peopleFirst: 'الناس أولاً',
    excellence: 'التميز',
    reliability: 'الموثوقية',
    innovation: 'الابتكار',
    peopleFirstDesc: 'نحن نعطي الأولوية لفريقنا وعملائنا، ونبني علاقات دائمة قائمة على الثقة.',
    excellenceDesc: 'نسعى لتحقيق أعلى جودة في كل ما نقوم به، متجاوزين التوقعات.',
    reliabilityDesc: 'يمكن لعملائنا الاعتماد علينا لتقديم خدمة متسقة وموثوقة.',
    innovationDesc: 'نحن نتبنى التقنيات الجديدة والحلول الإبداعية لحل التحديات المعقدة.',
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
