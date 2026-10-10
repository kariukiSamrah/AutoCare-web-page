import React from 'react';
import { Phone, MessageSquare, ArrowRight, ShieldCheck, Wrench, CheckCircle, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/automotiveData';

interface HeroProps {
  onBookClick: () => void;
  onQuoteClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onQuoteClick }) => {
  return (
    <section id="home" className="relative bg-zinc-950 border-b border-zinc-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 lg:py-20">
        
        {/* Split Grid Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Headlines & High-Intent Conversion CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Unboxed Metadata kicker (anti-pill rule) */}
            <div className="flex items-center gap-2 text-xs font-medium text-amber-500 uppercase tracking-widest">
              <span>Nyeri Town Workshop</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-zinc-400">Computerized Diagnostics & Repair</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-zinc-400">Central Kenya</span>
            </div>

            {/* Mandatory Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Reliable Vehicle Service <br className="hidden sm:inline" />
              <span className="text-amber-400">in Nyeri.</span>
            </h1>

            {/* Mandatory Supporting Text */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
              Diagnostics, servicing, repairs and maintenance for everyday motorists and commercial vehicles.
            </p>

            {/* Action Buttons Row */}
            <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
              <button
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm tracking-wide uppercase rounded-sm transition-colors shadow-sm"
              >
                <span>Book a Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onQuoteClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-100 font-semibold text-sm border border-zinc-700 rounded-sm transition-colors"
              >
                <span>Get a Quote</span>
              </button>
            </div>

            {/* Direct Instant Contact CTAs (Call Now & WhatsApp) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 border-t border-zinc-800/80">
              <span className="text-xs text-zinc-400 font-medium">Direct garage line:</span>
              <div className="flex items-center gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 rounded-sm text-xs font-semibold text-zinc-200 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call Now</span>
                  <span className="font-mono-numbers text-zinc-400">({BUSINESS_INFO.phoneDisplay})</span>
                </a>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hello%20Nyeri%20AutoCare,%20I%20would%20like%20to%20enquire%20about%20vehicle%20service.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-950/70 hover:bg-emerald-900/80 border border-emerald-700/60 rounded-sm text-xs font-semibold text-emerald-300 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Reassurance points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Transparent quotes</span>
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Genuine filter media</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Fast same-day minor service</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Impact Automotive Service Bay Visual */}
          <div className="lg:col-span-5 relative flex flex-col">
            <div className="relative rounded-sm overflow-hidden border border-zinc-800 h-full min-h-[320px] sm:min-h-[420px] lg:min-h-0 bg-zinc-900 group">
              <img
                src="/src/assets/images/hero_workshop_service_1791594474926.jpg"
                alt="Nyeri AutoCare Centre vehicle inspection service bay with technician"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              
              {/* Subtle contrast scrim for information overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent pointer-events-none" />

              {/* Bottom Info Card */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-zinc-950/90 border border-zinc-800 backdrop-blur-sm rounded-xs">
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <p className="font-semibold text-zinc-100">Light Industrial Workshop</p>
                    <p className="text-zinc-400 text-[11px]">Off Temple Road · Nyeri Town</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-mono-numbers text-amber-400 bg-amber-950/50 px-2 py-0.5 rounded border border-amber-800/60">
                      Open Today: 7:30 AM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Column Proof / Reassurance Strip Below Split */}
        <div className="mt-12 pt-8 border-t border-zinc-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          <div className="space-y-1">
            <div className="text-xs uppercase tracking-wider text-amber-500 font-semibold">Diagnosis First</div>
            <div className="text-sm font-medium text-zinc-200">OBD-II ECU Scanners</div>
            <p className="text-xs text-zinc-400">Fault isolation before parts are replaced to prevent unnecessary spending.</p>
          </div>
          <div className="space-y-1">
            <div className="text-xs uppercase tracking-wider text-amber-500 font-semibold">Central Nyeri Base</div>
            <div className="text-sm font-medium text-zinc-200">Light Industrial Area</div>
            <p className="text-xs text-zinc-400">Convenient access from Temple Road, Baden Powell way, and town centre.</p>
          </div>
          <div className="space-y-1">
            <div className="text-xs uppercase tracking-wider text-amber-500 font-semibold">Multi-Vehicle Focus</div>
            <div className="text-sm font-medium text-zinc-200">Saloon, SUV & Commercial</div>
            <p className="text-xs text-zinc-400">From everyday family hatchbacks to transport vans and farm pickups.</p>
          </div>
          <div className="space-y-1">
            <div className="text-xs uppercase tracking-wider text-amber-500 font-semibold">Direct Communication</div>
            <div className="text-sm font-medium text-zinc-200">WhatsApp & Phone Updates</div>
            <p className="text-xs text-zinc-400">Clear technician explanations and photo updates for replaced components.</p>
          </div>
        </div>

      </div>
    </section>
  );
};
