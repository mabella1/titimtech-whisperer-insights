
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "Titim Tech completely transformed our IT infrastructure. Their expertise and responsiveness have been invaluable to our business growth.",
    author: "Garry",
    position: "CXM Solutions",
    rating: 5
  },
  {
    content: "We've been working with Titim Tech for our cybersecurity needs. Their team identified vulnerabilities we weren't aware of and implemented robust solutions.",
    author: "Doug",
    position: "Qmatic",
    rating: 5
  },
  {
    content: "The cloud migration support from Titim Tech was seamless. They minimized downtime and provided excellent training for our team.",
    author: "Zach",
    position: "Smart CJM GmbH",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-purple-600">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. Here's what businesses like yours have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-tech-100">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
