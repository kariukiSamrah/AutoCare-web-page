import React from 'react';
import { AlertTriangle, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/automotiveData';

export const EmergencyBanner: React.FC = () => {
  return (
    <div className="bg-amber-500/10 border-y border-amber-500/20 py-3.5 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-sm bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
          </div>
          <div>
            <p className="text-xs sm:text-sm font-semibold text-zinc-100">
              Travelling through Nyeri or experiencing sudden car trouble?
            </p>
            <p className="text-xs text-zinc-400">
              Fast diagnostics and mechanical assessment for motorists on the Nairobi–Nyeri–Nanyuki highway corridor.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs uppercase tracking-wide rounded-sm transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Hotline</span>
          </a>
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=URGENT:%20I%20am%20travelling%20near%20Nyeri%20and%20need%20vehicle%20assistance.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-emerald-400 text-xs font-semibold rounded-sm transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp Help</span>
          </a>
        </div>
      </div>
    </div>
  );
};
