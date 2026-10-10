import React from 'react';
import { HelpCircle, ArrowRight, MessageSquare, AlertCircle } from 'lucide-react';
import { DIAGNOSTIC_SYMPTOMS_LIST, BUSINESS_INFO } from '../data/automotiveData';
import { DiagnosticSymptom } from '../types';

interface DiagnosticSymptomHelperProps {
  onSelectSymptom: (symptomText: string) => void;
  onOpenDescribeProblem: () => void;
}

export const DiagnosticSymptomHelper: React.FC<DiagnosticSymptomHelperProps> = ({
  onSelectSymptom,
  onOpenDescribeProblem,
}) => {
  return (
    <section id="diagnose" className="py-16 lg:py-20 bg-zinc-900 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Main Prominent Section Container */}
        <div className="bg-zinc-950 border border-zinc-800 p-8 sm:p-12 rounded-sm relative overflow-hidden">
          
          {/* Subtle accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500" />

          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-500">
              <HelpCircle className="w-4 h-4 text-amber-500" />
              <span>Interactive Diagnostic Assistance</span>
            </div>

            {/* Mandatory Exact Headline */}
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Not Sure What's Wrong With Your Car?
            </h2>

            {/* Mandatory Exact Supporting Text */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              Tell us what your vehicle is doing and we'll help you identify the next step.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenDescribeProblem}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm tracking-wide uppercase rounded-sm transition-colors shadow-sm"
              >
                <span>Describe the Problem</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Common Symptoms Selection Cards */}
          <div className="mt-10 pt-8 border-t border-zinc-800/80">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-4">
              Or tap a common symptom below to start your enquiry:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {DIAGNOSTIC_SYMPTOMS_LIST.map((item: DiagnosticSymptom) => (
                <button
                  key={item.id}
                  onClick={() => onSelectSymptom(item.symptom)}
                  className="text-left p-4 bg-zinc-900/90 hover:bg-zinc-850 border border-zinc-800 hover:border-amber-500/60 rounded-xs transition-all group flex flex-col justify-between space-y-3 cursor-pointer"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                      <h4 className="text-xs sm:text-sm font-semibold text-zinc-200 group-hover:text-amber-400 transition-colors">
                        {item.symptom}
                      </h4>
                    </div>
                    <p className="text-[11px] text-zinc-400 pl-6 leading-relaxed">
                      Likely: {item.likelyArea}
                    </p>
                  </div>

                  <div className="pl-6 pt-2 border-t border-zinc-800/60 flex items-center justify-between text-[11px] font-medium text-amber-500">
                    <span>Assess this issue</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* WhatsApp Direct Option for Fast Diagnosis */}
          <div className="mt-8 p-4 bg-zinc-900/60 border border-zinc-800 rounded-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs text-zinc-300">
              <span className="w-2 h-2 rounded-xs bg-emerald-500 shrink-0" />
              <span>Prefer to send a voice note or describe unusual noises directly on WhatsApp?</span>
            </div>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hello%20Nyeri%20AutoCare,%20my%20car%20is%20making%20a%20strange%20noise%20and%20I%20would%20like%20guidance.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-700/70 text-emerald-300 text-xs font-semibold rounded-xs transition-colors shrink-0"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Ask via WhatsApp Voice Note / Chat</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
