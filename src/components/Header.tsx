import React, { useState } from 'react';
import { Phone, MessageSquare, Menu, X, Clock, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/automotiveData';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Vehicles', href: '#vehicles' },
    { label: 'Diagnose', href: '#diagnose' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Utility Bar - Clean quiet regional contact */}
      <div className="bg-zinc-950 border-b border-zinc-800/80 text-zinc-400 text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>Nyeri Town, Off Temple Road</span>
            </span>
            <span className="hidden sm:inline-block text-zinc-600">·</span>
            <span className="hidden sm:flex items-center gap-1.5 text-zinc-400">
              <Clock className="w-3.5 h-3.5 text-zinc-500" />
              <span>Mon – Sat: 7:30 AM – 6:00 PM</span>
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span className="font-mono-numbers">{BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <span className="text-zinc-700">|</span>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hello%20Nyeri%20AutoCare%20Centre,%20I%20need%20assistance%20with%20my%20vehicle.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Primary Top Bar (Three-zone Top Bar Contract) */}
      <header className="sticky top-0 z-40 bg-zinc-900/95 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-18 flex items-center justify-between gap-8">
          
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            className="text-xl sm:text-2xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 flex items-center gap-2.5"
          >
            <span className="inline-block w-2.5 h-6 bg-amber-500 rounded-xs" aria-hidden="true"></span>
            <span>Nyeri AutoCare Centre</span>
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-zinc-950 bg-amber-500 hover:bg-amber-400 rounded-sm transition-colors whitespace-nowrap shrink-0 shadow-sm"
            >
              Book Service
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-400 hover:text-white rounded-md hover:bg-zinc-800 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-zinc-900 border-b border-zinc-800 px-6 py-5 space-y-4">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-zinc-200 hover:text-amber-400 py-1 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full text-center py-3 text-sm font-semibold uppercase tracking-wider text-zinc-950 bg-amber-500 hover:bg-amber-400 rounded-sm transition-colors"
              >
                Book Service
              </button>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-sm text-xs font-medium"
                >
                  <Phone className="w-4 h-4 text-amber-500" />
                  <span>Call Garage</span>
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hello%20Nyeri%20AutoCare%20Centre,%20I%20need%20service%20details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-emerald-950/60 border border-emerald-800/60 text-emerald-300 rounded-sm text-xs font-medium"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
