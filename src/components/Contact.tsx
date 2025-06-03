
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('contactTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('contactSubtitle')}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{t('sendMessage')}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('name')}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('email')}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('message')}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-tech-600 hover:bg-tech-700">
                    {t('sendMessage')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-tech-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-tech-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{t('address')}</h3>
                <p className="text-gray-600">
                  123 Tech Street<br />
                  Business District<br />
                  City, State 12345
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-tech-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-tech-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{t('phone')}</h3>
                <p className="text-gray-600">
                  Main: (555) 123-4567<br />
                  Support: (555) 123-4568
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-tech-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-tech-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{t('email')}</h3>
                <p className="text-gray-600">
                  info@titimtech.com<br />
                  support@titimtech.com
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-tech-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="h-6 w-6 text-tech-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{t('hours')}</h3>
                <p className="text-gray-600">
                  Mon-Fri: 8:00 AM - 6:00 PM<br />
                  Sat: 9:00 AM - 4:00 PM<br />
                  24/7 Emergency Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
