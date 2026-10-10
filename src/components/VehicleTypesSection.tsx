import React from 'react';
import { VEHICLE_TYPES_LIST, BUSINESS_INFO } from '../data/automotiveData';
import { Info, Check, MessageSquare, Car, Truck } from 'lucide-react';
import { VehicleType } from '../types';

interface VehicleTypesSectionProps {
  onSelectVehicleForBooking: (brandName: string) => void;
}

export const VehicleTypesSection: React.FC<VehicleTypesSectionProps> = ({ onSelectVehicleForBooking }) => {
  return (
    <section id="vehicles" className="py-16 lg:py-24 bg-zinc-950 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-widest text-amber-500">
            Specialized Independent Service
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Vehicles We Service Regularly
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Dedicated diagnostic tooling, manufacturer service schedules, and reliable part sourcing for Kenya's most driven vehicle makes.
          </p>

          {/* Mandatory Strict Non-Authorization Disclaimer */}
          <div className="mt-4 p-3.5 bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-400 flex items-start gap-2.5 rounded-xs">
            <Info className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-zinc-300">Independent Garage Notice: </span>
              Nyeri AutoCare Centre is an independent automotive workshop. We maintain and repair these vehicles using OEM-grade diagnostic scan tools and quality manufacturer-specification parts. We do not claim official manufacturer authorization or dealership affiliation.
            </div>
          </div>
        </div>

        {/* 6 Vehicle Type Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VEHICLE_TYPES_LIST.map((vehicle: VehicleType) => {
            const isCommercial = vehicle.id === 'commercial';

            return (
              <div
                key={vehicle.id}
                className="bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-sm p-6 flex flex-col justify-between space-y-5 transition-colors"
              >
                <div className="space-y-4">
                  
                  {/* Brand Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xs bg-zinc-800 flex items-center justify-center">
                        {isCommercial ? (
                          <Truck className="w-4 h-4 text-amber-500" />
                        ) : (
                          <Car className="w-4 h-4 text-amber-500" />
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {vehicle.brand}
                      </h3>
                    </div>
                    <span className="text-[11px] text-zinc-400 font-mono-numbers uppercase tracking-wider">
                      Independent Care
                    </span>
                  </div>

                  {/* Popular Models */}
                  <div>
                    <p className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Common Models Seen:
                    </p>
                    <div className="flex flex-wrap gap-1.5 text-xs text-zinc-400">
                      {vehicle.popularModels.map((model, idx) => (
                        <span key={idx} className="bg-zinc-950 px-2 py-0.5 rounded-xs border border-zinc-800/80 text-zinc-300">
                          {model}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Common Repairs */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                      Frequent Maintenance:
                    </p>
                    <ul className="space-y-1 text-xs text-zinc-400">
                      {vehicle.commonRepairs.map((repair, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                          <span>{repair}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technical Note */}
                  <p className="text-xs text-zinc-500 italic bg-zinc-950/60 p-2.5 rounded-xs border border-zinc-800/50">
                    {vehicle.notes}
                  </p>

                </div>

                {/* Card Action Buttons */}
                <div className="pt-3 border-t border-zinc-800 flex items-center gap-2">
                  <button
                    onClick={() => onSelectVehicleForBooking(vehicle.brand)}
                    className="flex-1 py-2 px-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors text-center"
                  >
                    Book for {vehicle.brand}
                  </button>

                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hello%20Nyeri%20AutoCare,%20I%20have%20a%20${encodeURIComponent(vehicle.brand)}%20and%20would%20like%20to%20enquire%20about%20parts%20or%20service.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-zinc-800 hover:bg-zinc-700 text-emerald-400 border border-zinc-700 rounded-xs transition-colors"
                    title={`WhatsApp enquiry for ${vehicle.brand}`}
                    aria-label={`WhatsApp enquiry for ${vehicle.brand}`}
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
