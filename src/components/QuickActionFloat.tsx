import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/automotiveData';

interface QuickActionFloatProps {
  onOpenBooking: () => void;
}

export const QuickActionFloat: React.FC<QuickActionFloatProps> = ({ onOpenBooking }) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800 py-2 px-3 shadow-2xl">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        
        {/* Call Button */}
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-zinc-900 hover:bg-zinc-850 border border-zinc-750 text-zinc-200 rounded-xs text-xs font-semibold transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
          <span>Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hello%20Nyeri%20AutoCare%20Centre,%20I%20need%20vehicle%20service%20help.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-emerald-950/90 hover:bg-emerald-900 border border-emerald-700/80 text-emerald-300 rounded-xs text-xs font-semibold transition-colors"
        >
          <MessageSquare className="w-3.5 h-3.5 shrink-0" />
          <span>WhatsApp</span>
        </a>

        {/* Book Button */}
        <button
          onClick={onOpenBooking}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 rounded-xs text-xs font-bold uppercase tracking-wider transition-colors"
        >
          <Calendar className="w-3.5 h-3.5 shrink-0" />
          <span>Book</span>
        </button>

      </div>
    </div>
  );
};
