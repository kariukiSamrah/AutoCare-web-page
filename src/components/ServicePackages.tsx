import React from 'react';
import { Check, Clock, ArrowRight, Shield } from 'lucide-react';
import { SERVICE_PACKAGES, BUSINESS_INFO } from '../data/automotiveData';

interface ServicePackagesProps {
  onSelectPackage: (packageName: string) => void;
}

export const ServicePackages: React.FC<ServicePackagesProps> = ({ onSelectPackage }) => {
  return (
    <section className="py-16 lg:py-20 bg-zinc-900 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="text-xs font-semibold uppercase tracking-widest text-amber-500">
            Transparent Pricing
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Clear Service Packages
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            No unexpected charges. Estimated package prices in Kenyan Shillings with full breakdown of inspected items.
          </p>
        </div>

        {/* 3 Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {SERVICE_PACKAGES.map((pkg, index) => {
            const isHighlighted = index === 1;

            return (
              <div
                key={pkg.title}
                className={`rounded-sm p-6 sm:p-8 flex flex-col justify-between transition-all ${
                  isHighlighted
                    ? 'bg-zinc-950 border-2 border-amber-500 relative shadow-xl'
                    : 'bg-zinc-950/80 border border-zinc-800'
                }`}
              >
                <div>
                  
                  {/* Badge & Title */}
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-500">
                      {pkg.badge}
                    </span>
                    <span className="text-xs text-zinc-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{pkg.time}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mt-4">
                    {pkg.title}
                  </h3>

                  <div className="mt-3">
                    <span className="text-2xl font-extrabold text-white font-mono-numbers">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-zinc-500 ml-1.5">est. parts & labour</span>
                  </div>

                  <p className="text-xs text-zinc-400 mt-3 pb-4 border-b border-zinc-800/80 leading-relaxed">
                    {pkg.summary}
                  </p>

                  {/* Checklist */}
                  <div className="pt-4 space-y-2.5">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-300">
                      Package Includes:
                    </p>
                    <ul className="space-y-2 text-xs text-zinc-300">
                      {pkg.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Card CTA */}
                <div className="pt-6 mt-6 border-t border-zinc-800/80">
                  <button
                    onClick={() => onSelectPackage(pkg.title)}
                    className={`w-full py-3 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors text-center ${
                      isHighlighted
                        ? 'bg-amber-500 hover:bg-amber-400 text-zinc-950 shadow-sm'
                        : 'bg-zinc-850 hover:bg-zinc-800 text-zinc-200 border border-zinc-700'
                    }`}
                  >
                    Select & Book This Package
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Note on genuine parts and bespoke quotes */}
        <div className="mt-8 text-center text-xs text-zinc-500">
          <span>* Pricing varies slightly based on engine oil volume (litres) and filter specifications. Exact estimate provided prior to work commencing.</span>
        </div>

      </div>
    </section>
  );
};
