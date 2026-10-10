import React from 'react';
import { Users, MessageSquareQuote, MapPin, Cpu, Bell, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/automotiveData';

export const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      title: 'Experienced Technicians',
      description: 'Hands-on mechanical and auto-electrical specialists familiar with Kenya’s driving conditions, high-mileage wear patterns, and rough road stresses.',
      icon: <Users className="w-5 h-5 text-amber-500" />,
    },
    {
      title: 'Transparent Communication',
      description: 'We explain issues in plain language, provide estimated costs before commencing repairs, and show you worn parts removed from your car.',
      icon: <MessageSquareQuote className="w-5 h-5 text-amber-500" />,
    },
    {
      title: 'Convenient Location',
      description: 'Easily accessible workshop in Nyeri Town’s Light Industrial Area off Temple Road with ample parking and straightforward access from main thoroughfares.',
      icon: <MapPin className="w-5 h-5 text-amber-500" />,
    },
    {
      title: 'Diagnostic Equipment',
      description: 'Equipped with electronic OBD-II diagnostic tablets and testing instruments to isolate electrical, transmission, and sensor faults accurately.',
      icon: <Cpu className="w-5 h-5 text-amber-500" />,
    },
    {
      title: 'Service Reminders',
      description: 'Complimentary SMS or WhatsApp service reminders tailored to your mileage intervals, helping you stay ahead of routine oil changes and filter renewals.',
      icon: <Bell className="w-5 h-5 text-amber-500" />,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-zinc-950 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <div className="text-xs font-semibold uppercase tracking-widest text-amber-500">
            Our Standard
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Choose Nyeri AutoCare Centre
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            A practical, dependable approach to vehicle maintenance centered on accurate diagnosis, honest pricing, and quality workmanship.
          </p>
        </div>

        {/* 5 Realistic Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`p-6 rounded-sm bg-zinc-900 border border-zinc-800 flex flex-col justify-between space-y-4 ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xs bg-zinc-950 border border-zinc-800 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-white">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-800/80 flex items-center gap-1.5 text-xs text-zinc-500">
                <CheckCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>Standard with every visit</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
