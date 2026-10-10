import React, { useState } from 'react';
import { 
  Cpu, Settings, Disc, Sliders, Droplets, Zap, Wind, Target, Wrench, 
  ArrowRight, MessageSquare, Clock, Shield 
} from 'lucide-react';
import { SERVICES_LIST, BUSINESS_INFO } from '../data/automotiveData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-5 h-5 text-amber-500" />;
      case 'Settings': return <Settings className="w-5 h-5 text-amber-500" />;
      case 'Disc': return <Disc className="w-5 h-5 text-amber-500" />;
      case 'Sliders': return <Sliders className="w-5 h-5 text-amber-500" />;
      case 'Droplets': return <Droplets className="w-5 h-5 text-amber-500" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-500" />;
      case 'Wind': return <Wind className="w-5 h-5 text-amber-500" />;
      case 'Target': return <Target className="w-5 h-5 text-amber-500" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-amber-500" />;
      default: return <Wrench className="w-5 h-5 text-amber-500" />;
    }
  };

  const filteredServices = activeCategory === 'all'
    ? SERVICES_LIST
    : SERVICES_LIST.filter(item => item.category === activeCategory);

  const filterTabs = [
    { id: 'all', label: 'All Services (9)' },
    { id: 'diagnostics', label: 'Diagnostics & Electrical' },
    { id: 'routine', label: 'Oil & Routine Care' },
    { id: 'handling', label: 'Brakes & Suspension' },
    { id: 'mechanical', label: 'Engine & Mechanical' },
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-zinc-950 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-amber-500">
              Workshop Capabilities
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Comprehensive Automotive Services
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              Equipped for precision diagnostics, scheduled preventive servicing, and mechanical repairs in Nyeri Town.
            </p>
          </div>

          {/* Interactive filter tabs (functional buttons allowed per skill) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-zinc-900 border border-zinc-800 rounded-sm">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-xs transition-colors whitespace-nowrap shrink-0 ${
                  activeCategory === tab.id
                    ? 'bg-amber-500 text-zinc-950 font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Spotlight Banner: Diagnostics & Engine Bay */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Spotlight 1: Computer Diagnostics */}
          <div className="relative rounded-sm overflow-hidden border border-zinc-800 bg-zinc-900 flex flex-col sm:flex-row items-stretch">
            <div className="sm:w-1/2 relative min-h-[200px] bg-zinc-950">
              <img
                src="/src/assets/images/diagnostics_obd_scanner_1791594487562.jpg"
                alt="Automotive diagnostic scanner live ECU telemetry scan"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-zinc-950/80 via-transparent to-transparent" />
            </div>
            <div className="sm:w-1/2 p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-amber-500">
                  Featured Service
                </div>
                <h3 className="text-lg font-bold text-white">Advanced ECU & Sensor Diagnostics</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Pinpoint exact trouble codes without trial-and-error part swapping. We check fuel trims, sensor voltages, and transmission solenoids.
                </p>
              </div>
              <div className="pt-2 flex items-center gap-2">
                <button
                  onClick={() => onSelectServiceForBooking('Computer Diagnostics')}
                  className="px-3.5 py-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors"
                >
                  Book Diagnostic Scan
                </button>
              </div>
            </div>
          </div>

          {/* Spotlight 2: Precision Engine Bay Servicing */}
          <div className="relative rounded-sm overflow-hidden border border-zinc-800 bg-zinc-900 flex flex-col sm:flex-row items-stretch">
            <div className="sm:w-1/2 relative min-h-[200px] bg-zinc-950">
              <img
                src="/src/assets/images/engine_maintenance_bay_1791594498457.jpg"
                alt="Clean vehicle engine bay during scheduled maintenance"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-zinc-950/80 via-transparent to-transparent" />
            </div>
            <div className="sm:w-1/2 p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-amber-500">
                  Scheduled Servicing
                </div>
                <h3 className="text-lg font-bold text-white">Genuine Filter & Precision Lubrication</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Using manufacturer-recommended viscosity oils to guard against cold Nyeri highland starts and steep incline engine stress.
                </p>
              </div>
              <div className="pt-2 flex items-center gap-2">
                <button
                  onClick={() => onSelectServiceForBooking('Oil & Filter Service')}
                  className="px-3.5 py-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-100 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors"
                >
                  Book Oil Service
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 9 Service Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service: ServiceItem) => {
            const isExpanded = expandedService === service.id;
            
            return (
              <div
                key={service.id}
                className="bg-zinc-900 border border-zinc-800/90 hover:border-zinc-700 p-6 rounded-sm flex flex-col justify-between transition-colors space-y-4"
              >
                <div>
                  {/* Top line: Icon & Estimated Price */}
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                    <div className="p-2.5 bg-zinc-800/80 rounded-sm border border-zinc-700/50">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono-numbers text-amber-400 font-semibold">
                        {service.estimatedPriceKES}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white pt-3">
                    {service.name}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
                    {isExpanded ? service.fullDescription : service.shortDescription}
                  </p>

                  {/* Unboxed Metadata: Duration & Symptoms */}
                  <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center gap-2 text-xs text-zinc-500">
                    <span className="flex items-center gap-1 text-zinc-400">
                      <Clock className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{service.estimatedDuration}</span>
                    </span>
                    <span aria-hidden="true" className="text-zinc-700">·</span>
                    <button
                      onClick={() => setExpandedService(isExpanded ? null : service.id)}
                      className="text-amber-500/90 hover:text-amber-400 text-xs font-medium underline underline-offset-4"
                    >
                      {isExpanded ? 'Less details' : 'View checklist'}
                    </button>
                  </div>

                  {/* Expanded Checklist */}
                  {isExpanded && (
                    <div className="mt-3 p-3 bg-zinc-950/70 border border-zinc-800 rounded-xs text-xs space-y-2">
                      <p className="font-semibold text-zinc-300">Common Signs You Need This:</p>
                      <ul className="space-y-1 text-zinc-400">
                        {service.commonSymptoms.map((symptom, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-amber-500">›</span>
                            <span>{symptom}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Card CTAs (Primary & WhatsApp) */}
                <div className="pt-4 border-t border-zinc-800 flex items-center gap-2">
                  <button
                    onClick={() => onSelectServiceForBooking(service.name)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-amber-500 hover:bg-amber-400 text-zinc-950 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors"
                  >
                    <span>Book Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hello%20Nyeri%20AutoCare,%20I%20am%20inquiring%20about%20${encodeURIComponent(service.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-zinc-800 hover:bg-zinc-700 text-emerald-400 border border-zinc-700 rounded-xs transition-colors"
                    title={`Enquire about ${service.name} on WhatsApp`}
                    aria-label={`Enquire about ${service.name} on WhatsApp`}
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
