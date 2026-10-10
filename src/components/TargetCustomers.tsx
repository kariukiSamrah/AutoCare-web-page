import React, { useState } from 'react';
import { TARGET_AUDIENCES } from '../data/automotiveData';
import { User, Car, Briefcase, Navigation, CheckCircle2, ArrowRight } from 'lucide-react';

interface TargetCustomersProps {
  onOpenBooking: () => void;
}

export const TargetCustomers: React.FC<TargetCustomersProps> = ({ onOpenBooking }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const getAudienceIcon = (index: number) => {
    switch (index) {
      case 0: return <User className="w-5 h-5 text-amber-500" />;
      case 1: return <Car className="w-5 h-5 text-amber-500" />;
      case 2: return <Briefcase className="w-5 h-5 text-amber-500" />;
      case 3: return <Navigation className="w-5 h-5 text-amber-500" />;
      default: return <Car className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section className="py-16 bg-zinc-900 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="max-w-3xl mb-10 space-y-2">
          <div className="text-xs font-semibold uppercase tracking-widest text-amber-500">
            Tailored Maintenance
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Built for Central Kenya's Drivers & Fleets
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Whether keeping a family runabout reliable or minimizing commercial downtime, our service processes are structured for your needs.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {TARGET_AUDIENCES.map((item, index) => {
            const isSelected = selectedIndex === index;

            return (
              <div
                key={item.title}
                onClick={() => setSelectedIndex(index)}
                className={`p-6 rounded-sm border transition-all cursor-pointer flex flex-col justify-between space-y-4 ${
                  isSelected
                    ? 'bg-zinc-950 border-amber-500/80 shadow-md ring-1 ring-amber-500/50'
                    : 'bg-zinc-950/60 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-950'
                }`}
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xs bg-zinc-850 flex items-center justify-center border border-zinc-800">
                    {getAudienceIcon(index)}
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-800/80 space-y-2">
                  <div className="flex items-start gap-1.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                    <span>{item.benefit}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
