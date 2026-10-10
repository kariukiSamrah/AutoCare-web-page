import React, { useState, useEffect, useRef } from 'react';
import { Camera, Upload, X, CheckCircle2, MessageSquare, AlertCircle, FileText } from 'lucide-react';
import { BUSINESS_INFO } from '../data/automotiveData';
import { QuoteRequestPayload } from '../types';

interface QuoteRequestFormProps {
  initialProblem?: string;
}

export const QuoteRequestForm: React.FC<QuoteRequestFormProps> = ({ initialProblem = '' }) => {
  const [formData, setFormData] = useState<QuoteRequestPayload>({
    name: '',
    phone: '',
    vehicle: '',
    problem: initialProblem || '',
  });

  const [selectedPhoto, setSelectedPhoto] = useState<File | null>(null);
  const [photoPreviewUrl, setPhotoPreviewUrl] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync initialProblem if passed from diagnostic symptom helper
  useEffect(() => {
    if (initialProblem) {
      setFormData(prev => ({ ...prev, problem: initialProblem }));
    }
  }, [initialProblem]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (errorMsg) setErrorMsg('');
  };

  const handlePhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedPhoto(file);
      const url = URL.createObjectURL(file);
      setPhotoPreviewUrl(url);
    }
  };

  const removePhoto = () => {
    setSelectedPhoto(null);
    if (photoPreviewUrl) {
      URL.revokeObjectURL(photoPreviewUrl);
      setPhotoPreviewUrl(null);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setErrorMsg('Please provide your name.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMsg('Please enter your phone number so we can send an estimate.');
      return;
    }
    if (!formData.vehicle.trim()) {
      setErrorMsg('Please indicate your vehicle (e.g., Toyota Prado 2012).');
      return;
    }
    if (!formData.problem.trim()) {
      setErrorMsg('Please describe what your vehicle is experiencing.');
      return;
    }

    setIsSubmitting(true);
    // Simulate brief processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  const handleReset = () => {
    setSubmitted(false);
    removePhoto();
    setFormData({
      name: '',
      phone: '',
      vehicle: '',
      problem: '',
    });
  };

  // WhatsApp pre-formatted string
  const whatsappQuoteUrl = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
    `Hello Nyeri AutoCare, I would like an estimate/quote:\nName: ${formData.name}\nPhone: ${formData.phone}\nVehicle: ${formData.vehicle}\nProblem Description: ${formData.problem}${selectedPhoto ? '\n(I have a photo of the part/dashboard ready to send)' : ''}`
  )}`;

  return (
    <section id="quote-request" className="py-16 lg:py-24 bg-zinc-900 border-b border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="text-xs font-semibold uppercase tracking-widest text-amber-500">
            Quick Estimate & Problem Assessment
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Describe Your Problem & Get a Quote
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Tell us what is happening with your car. Our technicians review your description and provide transparent guidance and pricing.
          </p>
        </div>

        {/* Polished Container */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-sm p-6 sm:p-10 shadow-lg">
          
          {submitted ? (
            /* Submission state */
            <div className="py-8 text-center space-y-6">
              <div className="w-16 h-16 bg-emerald-950/80 border border-emerald-600/50 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Problem Description Received
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto">
                  Thank you, <strong className="text-zinc-200">{formData.name}</strong>. Our senior technician will review the details for your <strong className="text-zinc-200">{formData.vehicle}</strong> and contact you with an estimated cost and recommended next steps.
                </p>
              </div>

              <div className="bg-zinc-900 p-4 rounded-xs border border-zinc-800 text-left text-xs max-w-md mx-auto space-y-2">
                <div className="flex justify-between py-1 border-b border-zinc-800">
                  <span className="text-zinc-500">Vehicle:</span>
                  <span className="font-semibold text-zinc-200">{formData.vehicle}</span>
                </div>
                <div className="py-1 border-b border-zinc-800">
                  <span className="text-zinc-500 block mb-1">Issue Reported:</span>
                  <span className="text-zinc-300 font-mono text-[11px] block bg-zinc-950 p-2 rounded-xs">
                    {formData.problem}
                  </span>
                </div>
                {selectedPhoto && (
                  <div className="flex items-center justify-between py-1 text-zinc-400">
                    <span>Uploaded Photo:</span>
                    <span className="font-mono text-zinc-300">{selectedPhoto.name}</span>
                  </div>
                )}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={whatsappQuoteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider rounded-xs transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Forward Details to WhatsApp Advisor</span>
                </a>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-semibold rounded-xs transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            /* Active Quote Request Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {errorMsg && (
                <div className="p-3.5 bg-red-950/60 border border-red-800/80 text-red-300 text-xs flex items-center gap-2 rounded-xs">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="quoteName" className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                    Your Name <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="quoteName"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Grace Wambui"
                    className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-700 focus:border-amber-500 focus:outline-none rounded-xs text-sm text-zinc-100 placeholder-zinc-600"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="quotePhone" className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                    Phone / WhatsApp <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="quotePhone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 0722 123 456"
                    className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-700 focus:border-amber-500 focus:outline-none rounded-xs text-sm text-zinc-100 placeholder-zinc-600 font-mono-numbers"
                  />
                </div>
              </div>

              {/* Row 2: Vehicle */}
              <div className="space-y-1.5">
                <label htmlFor="quoteVehicle" className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                  Vehicle Make & Model <span className="text-amber-500">*</span>
                </label>
                <input
                  type="text"
                  id="quoteVehicle"
                  name="vehicle"
                  required
                  value={formData.vehicle}
                  onChange={handleChange}
                  placeholder="e.g. Toyota Fielder 2014, Subaru Outback 2011, Isuzu D-Max"
                  className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-700 focus:border-amber-500 focus:outline-none rounded-xs text-sm text-zinc-100 placeholder-zinc-600"
                />
              </div>

              {/* Row 3: Problem */}
              <div className="space-y-1.5">
                <label htmlFor="quoteProblem" className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                  Problem Description <span className="text-amber-500">*</span>
                </label>
                <textarea
                  id="quoteProblem"
                  name="problem"
                  required
                  rows={4}
                  value={formData.problem}
                  onChange={handleChange}
                  placeholder="Describe sounds, warning lights, smells, vibrations, or when the issue happens (e.g. 'Overheats when driving uphill towards Outspan road, smell of sweet coolant')..."
                  className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-700 focus:border-amber-500 focus:outline-none rounded-xs text-sm text-zinc-100 placeholder-zinc-600 leading-relaxed"
                />
              </div>

              {/* Row 4: Optional Photo Upload (simulated interactive dropzone) */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                  Optional Photo of Problem / Dashboard Light / Part
                </label>
                
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  onChange={handlePhotoSelect}
                  className="hidden"
                  id="problem-photo-upload"
                />

                {photoPreviewUrl ? (
                  <div className="p-3 bg-zinc-900 border border-zinc-700 rounded-xs flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={photoPreviewUrl}
                        alt="Uploaded preview"
                        className="w-14 h-14 object-cover rounded-xs border border-zinc-700"
                      />
                      <div className="text-xs">
                        <p className="font-semibold text-zinc-200 line-clamp-1">{selectedPhoto?.name}</p>
                        <p className="text-zinc-500">
                          {selectedPhoto ? `${(selectedPhoto.size / 1024).toFixed(0)} KB · Ready to assess` : ''}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={removePhoto}
                      className="p-1.5 text-zinc-400 hover:text-red-400 rounded transition-colors"
                      title="Remove image"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ) : (
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="border border-dashed border-zinc-700 hover:border-amber-500/80 bg-zinc-900/50 hover:bg-zinc-900 p-6 rounded-xs text-center cursor-pointer transition-colors"
                  >
                    <Camera className="w-6 h-6 text-zinc-500 mx-auto mb-2" />
                    <p className="text-xs font-medium text-zinc-300">
                      Click to upload photo of warning light or leaking component
                    </p>
                    <p className="text-[11px] text-zinc-500 mt-1">
                      PNG, JPG up to 10MB (Simulated assessment upload)
                    </p>
                  </div>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-zinc-950 font-bold text-sm uppercase tracking-wider rounded-xs transition-colors shadow-sm"
                >
                  {isSubmitting ? 'Processing Details...' : 'Request Problem Assessment & Quote'}
                </button>
              </div>

              <p className="text-center text-xs text-zinc-500">
                Prefer immediate help? Reach us on WhatsApp at{' '}
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hello%20Nyeri%20AutoCare,%20I%20need%20a%20quote.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline font-mono-numbers"
                >
                  {BUSINESS_INFO.whatsappDisplay}
                </a>
              </p>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
