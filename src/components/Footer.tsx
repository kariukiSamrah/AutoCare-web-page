import React from 'react';
import { BUSINESS_INFO } from '../data/automotiveData';
import { Phone, MessageSquare, MapPin, Clock } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenQuote }) => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-850 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Brand & Summary */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-6 bg-amber-500 rounded-xs" aria-hidden="true" />
              <span className="text-lg font-bold text-white tracking-tight">
                {BUSINESS_INFO.name}
              </span>
            </div>
            <p className="text-zinc-400 leading-relaxed pr-4 text-xs">
              Diagnostics, servicing, repairs and maintenance for everyday motorists and commercial vehicles in Nyeri Town and surrounding towns in Central Kenya.
            </p>
            <div className="pt-2 text-[11px] text-zinc-500">
              <p>Off Temple Road, Light Industrial Area, Nyeri Town, Kenya</p>
              <p className="mt-0.5">Telephone: <span className="font-mono-numbers text-zinc-300">{BUSINESS_INFO.phoneDisplay}</span></p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-semibold text-white uppercase tracking-wider">Quick Navigation</p>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Services</a></li>
              <li><a href="#vehicles" className="hover:text-amber-400 transition-colors">Vehicles We Service</a></li>
              <li><a href="#diagnose" className="hover:text-amber-400 transition-colors">Diagnostic Assistance</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About the Garage</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact & Directions</a></li>
            </ul>
          </div>

          {/* Service Links */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-semibold text-white uppercase tracking-wider">Services</p>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Computer Diagnostics (OBD-II)</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Routine Oil & Filter Service</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Brake Pad & Rotor Repair</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Suspension & Steering Overhaul</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">AC Pressure Testing & Regas</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Computerized Wheel Alignment</a></li>
            </ul>
          </div>

          {/* Direct Actions & Local Towns */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-semibold text-white uppercase tracking-wider">Direct Actions</p>
            <div className="flex flex-col gap-2">
              <button
                onClick={onOpenBooking}
                className="w-full text-center py-2.5 px-3 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold uppercase tracking-wider rounded-xs transition-colors"
              >
                Book a Service
              </button>
              <button
                onClick={onOpenQuote}
                className="w-full text-center py-2.5 px-3 bg-zinc-850 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 font-semibold rounded-xs transition-colors"
              >
                Describe Your Problem
              </button>
            </div>

            <div className="pt-2">
              <p className="text-[11px] font-semibold text-zinc-300 uppercase tracking-wider mb-1">Serving Central Kenya:</p>
              <p className="text-[11px] text-zinc-500 leading-normal">
                Nyeri Town · Karatina · Othaya · Tetu · Mukurwe-ini · Naro Moru · Nanyuki Highway corridor
              </p>
            </div>
          </div>

        </div>

        {/* Local SEO Text Bar */}
        <div className="pt-8 pb-6 border-t border-zinc-850/80 text-[11px] text-zinc-500 leading-relaxed">
          <p>
            <strong>Local Automotive Services:</strong> Independent garage providing professional car repair in Nyeri, auto repair Nyeri, vehicle diagnostics Nyeri, car service Nyeri, and mechanic in Nyeri Town. Servicing Toyota, Nissan, Subaru, Mazda, Mercedes-Benz, and commercial transport vehicles.
          </p>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-6 border-t border-zinc-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <p>© {new Date().getFullYear()} Nyeri AutoCare Centre. All rights reserved.</p>
          <p className="text-zinc-600">Independent garage demonstration. Manufacturer vehicle trademarks belong to their respective owners.</p>
        </div>

      </div>
    </footer>
  );
};
