import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, Mail, Navigation, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/automotiveData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-zinc-950 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <div className="text-xs font-semibold uppercase tracking-widest text-amber-500">
            Find & Visit Our Garage
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact & Garage Location in Nyeri
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Located in Nyeri Town with convenient vehicle access, dedicated customer parking, and active service bays.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-zinc-900 border border-zinc-800 rounded-sm p-6 sm:p-8 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              
              {/* Location */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xs bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Physical Address</h3>
                  <p className="text-sm text-zinc-200 mt-1">{BUSINESS_INFO.location}</p>
                  <p className="text-xs text-zinc-400 mt-0.5">{BUSINESS_INFO.county}</p>
                  <p className="text-xs text-zinc-500 mt-1 italic">{BUSINESS_INFO.landmark}</p>
                </div>
              </div>

              {/* Phone Lines */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xs bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Telephone Calls</h3>
                  <div className="mt-1 space-y-1">
                    <div>
                      <a
                        href={`tel:${BUSINESS_INFO.phone}`}
                        className="text-sm font-mono-numbers text-amber-400 hover:underline font-semibold"
                      >
                        {BUSINESS_INFO.phoneDisplay}
                      </a>
                      <span className="text-xs text-zinc-400 ml-2">(Primary Workshop Desk)</span>
                    </div>
                    <div>
                      <a
                        href={`tel:${BUSINESS_INFO.phoneSecondary}`}
                        className="text-xs font-mono-numbers text-zinc-400 hover:text-white"
                      >
                        {BUSINESS_INFO.phoneSecondary}
                      </a>
                      <span className="text-xs text-zinc-500 ml-2">(Service Advisor Line)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xs bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0 mt-0.5">
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider">WhatsApp Direct</h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Send photos of parts, voice descriptions, or booking inquiries directly.
                  </p>
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hello%20Nyeri%20AutoCare%20Centre,%20I%20would%20like%20to%20enquire%20about%20vehicle%20service.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 font-mono-numbers"
                  >
                    <span>Chat on WhatsApp ({BUSINESS_INFO.whatsappDisplay})</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xs bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Opening Hours</h3>
                  <div className="mt-1 text-xs text-zinc-300 space-y-1">
                    <p className="flex justify-between gap-4">
                      <span className="text-zinc-400">Monday – Friday:</span>
                      <span className="font-mono-numbers text-zinc-200">7:30 AM – 6:00 PM</span>
                    </p>
                    <p className="flex justify-between gap-4">
                      <span className="text-zinc-400">Saturday:</span>
                      <span className="font-mono-numbers text-zinc-200">8:00 AM – 5:00 PM</span>
                    </p>
                    <p className="flex justify-between gap-4">
                      <span className="text-zinc-400">Sunday:</span>
                      <span className="text-amber-400 font-medium">Emergency Calls & Fleets</span>
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Map Directions CTA */}
            <div className="pt-4 border-t border-zinc-800">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Nyeri+Town+Kenya+automotive+garage"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-zinc-800 hover:bg-zinc-750 border border-zinc-700 text-zinc-100 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors"
              >
                <Navigation className="w-4 h-4 text-amber-500" />
                <span>Get Driving Directions to Garage</span>
              </a>
            </div>

          </div>

          {/* Interactive Map Placeholder & Neighborhood Landmarks */}
          <div className="lg:col-span-7 bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden flex flex-col justify-between">
            
            {/* Map Canvas Graphic */}
            <div className="relative w-full h-[320px] sm:h-[380px] bg-zinc-950 flex items-center justify-center overflow-hidden">
              
              {/* Stylized vector map grid representation of Nyeri Town */}
              <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#52525b" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                {/* Major routes representation */}
                <path d="M 0 100 Q 250 150 500 80 T 800 120" stroke="#f59e0b" strokeWidth="3" fill="none" opacity="0.6" />
                <path d="M 200 0 L 250 400" stroke="#71717a" strokeWidth="2" fill="none" />
                <path d="M 450 0 L 400 400" stroke="#71717a" strokeWidth="2" fill="none" />
                <path d="M 0 260 L 800 240" stroke="#71717a" strokeWidth="2" fill="none" />
              </svg>

              {/* Pinpoint Workshop Marker */}
              <div className="relative z-10 flex flex-col items-center animate-bounce duration-1000">
                <div className="px-3 py-1.5 bg-amber-500 text-zinc-950 font-bold text-xs rounded-xs shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Nyeri AutoCare Centre</span>
                </div>
                <div className="w-3 h-3 bg-amber-500 rotate-45 -mt-1.5" />
                <div className="w-6 h-2 bg-amber-500/30 rounded-full mt-2 filter blur-xs" />
              </div>

              {/* Surrounding Landmark Markers */}
              <div className="absolute top-6 left-6 text-[11px] bg-zinc-900/90 border border-zinc-800 px-2.5 py-1 rounded-xs text-zinc-400">
                To Nyeri CBD & Baden-Powell (3 min)
              </div>

              <div className="absolute bottom-6 right-6 text-[11px] bg-zinc-900/90 border border-zinc-800 px-2.5 py-1 rounded-xs text-zinc-400">
                To Outspan / Nyahururu Highway junction
              </div>

              <div className="absolute top-6 right-6 text-[11px] bg-zinc-900/90 border border-zinc-800 px-2.5 py-1 rounded-xs text-zinc-400">
                To Karatina / Nairobi Highway (A2)
              </div>

              {/* GPS Coordinates stamp */}
              <div className="absolute bottom-4 left-4 text-[10px] font-mono-numbers text-zinc-500 bg-zinc-950/80 px-2 py-0.5 rounded border border-zinc-800">
                GPS: -0.4201° S, 36.9476° E
              </div>
            </div>

            {/* Map Guidance Footer */}
            <div className="p-6 bg-zinc-900 border-t border-zinc-800 space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold text-zinc-200">
                <span>Access Instructions for Drivers:</span>
                <span className="text-amber-500">Wide gate for commercial trucks & vans</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Take Temple Road towards Light Industrial Area. Turn onto the Kanisa Road feeder route just after the Shell station. Look for the distinct blue and white "AutoCare Service Bays" entrance sign on your left with customer reception parking right in front.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
