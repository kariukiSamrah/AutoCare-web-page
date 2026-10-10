import React from 'react';
import { MapPin, CheckCircle, ShieldCheck, Wrench } from 'lucide-react';
import { BUSINESS_INFO } from '../data/automotiveData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-zinc-900 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Workshop Exterior Visual */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-sm overflow-hidden border border-zinc-800 bg-zinc-950 shadow-md group">
              <img
                src="/src/assets/images/workshop_front_nyeri_1791594508549.jpg"
                alt="Nyeri AutoCare Centre commercial service bays and workshop exterior in Nyeri"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            
            {/* Location overlay badge */}
            <div className="mt-3 flex items-center justify-between text-xs text-zinc-400 px-1">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                <span>Light Industrial Area, Nyeri Town</span>
              </span>
              <span className="text-zinc-500">Workshop Bays & Customer Reception</span>
            </div>
          </div>

          {/* Business Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-widest text-amber-500">
                About the Workshop
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Dedicated Automotive Care in Nyeri Town
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
              <p>
                Nyeri AutoCare Centre was established to meet the maintenance needs of motorists navigating the varied terrain of Nyeri County and the wider Central Kenya region. From steep hill climbs around Tetu and Othaya to high-mileage runs along the Karatina–Nanyuki corridor, local vehicles experience distinctive wear on braking systems, cooling loops, and suspensions.
              </p>
              
              <p>
                We bridge the gap between unstructured informal roadside garages and high-markup urban franchise dealerships. By investing in modern OBD-II diagnostic tablets, proper vehicle lifts, and systematic service checklists, we provide clear explanations and reliable workmanship without surprise invoices.
              </p>

              <p>
                Whether you drive a daily family hatchback, operate a passenger shuttle, or manage a fleet of agricultural delivery pickups, our focus remains straightforward: keep your vehicle running safely, dependably, and efficiently.
              </p>
            </div>

            {/* Operating Principles */}
            <div className="pt-4 border-t border-zinc-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-500 shrink-0" />
                <span>No unauthorized work or parts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Clean diagnostic report explanations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Quality lubricants & filter elements</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Direct technician contact</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
