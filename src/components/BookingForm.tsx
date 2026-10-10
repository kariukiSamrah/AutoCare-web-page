import React, { useState, useEffect } from 'react';
import { Calendar, Phone, Car, CheckCircle2, MessageSquare, AlertCircle, Wrench } from 'lucide-react';
import { SERVICES_LIST, BUSINESS_INFO } from '../data/automotiveData';
import { ServiceBookingPayload } from '../types';

interface BookingFormProps {
  initialService?: string;
  initialMake?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({ initialService = '', initialMake = '' }) => {
  const [formData, setFormData] = useState<ServiceBookingPayload>({
    name: '',
    phone: '',
    vehicleMake: initialMake || '',
    vehicleModel: '',
    registrationNumber: '',
    serviceRequired: initialService || SERVICES_LIST[0].name,
    preferredDate: '',
    additionalDetails: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [bookingRef, setBookingRef] = useState('');

  // Sync initial values if parent updates them
  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, serviceRequired: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialMake) {
      setFormData(prev => ({ ...prev, vehicleMake: initialMake }));
    }
  }, [initialMake]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 9) {
      setErrorMsg('Please provide a valid phone number so we can confirm your slot.');
      return;
    }
    if (!formData.vehicleMake.trim()) {
      setErrorMsg('Please specify your vehicle make (e.g. Toyota, Subaru).');
      return;
    }

    // Generate local confirmation reference
    const ref = `NAC-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(ref);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      vehicleMake: '',
      vehicleModel: '',
      registrationNumber: '',
      serviceRequired: SERVICES_LIST[0].name,
      preferredDate: '',
      additionalDetails: '',
    });
  };

  // WhatsApp formatted string
  const whatsappBookingUrl = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
    `Hello Nyeri AutoCare Centre, I submitted booking ref [${bookingRef}]:\nName: ${formData.name}\nPhone: ${formData.phone}\nVehicle: ${formData.vehicleMake} ${formData.vehicleModel} (${formData.registrationNumber || 'Pending'})\nService: ${formData.serviceRequired}\nDate: ${formData.preferredDate || 'Earliest available'}\nNotes: ${formData.additionalDetails || 'None'}`
  )}`;

  return (
    <section id="book-service" className="py-16 lg:py-24 bg-zinc-950 border-b border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="text-xs font-semibold uppercase tracking-widest text-amber-500">
            Workshop Reservation
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Book a Service in Nyeri
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Reserve your service bay slot in advance to ensure fast technician turnaround and minimal waiting time.
          </p>
        </div>

        {/* Polished Form Card */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-6 sm:p-10 shadow-lg">
          
          {submitted ? (
            /* Submission Success State */
            <div className="py-8 text-center space-y-6">
              <div className="w-16 h-16 bg-emerald-950/80 border border-emerald-600/50 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono-numbers text-amber-400 uppercase tracking-wider">
                  Booking Ref: {bookingRef}
                </span>
                {/* Mandatory exact copy */}
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Your service request has been received. We'll contact you to confirm.
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto">
                  Our service advisor will reach out to <strong className="text-zinc-200">{formData.phone}</strong> shortly to confirm your bay slot and answer any questions.
                </p>
              </div>

              {/* Summary Box */}
              <div className="bg-zinc-950 p-4 rounded-xs border border-zinc-800 text-left text-xs max-w-md mx-auto space-y-2">
                <div className="flex justify-between py-1 border-b border-zinc-850">
                  <span className="text-zinc-500">Vehicle:</span>
                  <span className="font-semibold text-zinc-200">
                    {formData.vehicleMake} {formData.vehicleModel} {formData.registrationNumber && `(${formData.registrationNumber})`}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-850">
                  <span className="text-zinc-500">Service:</span>
                  <span className="font-semibold text-amber-400">{formData.serviceRequired}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-zinc-500">Preferred Date:</span>
                  <span className="font-semibold text-zinc-200">
                    {formData.preferredDate || 'Earliest Available'}
                  </span>
                </div>
              </div>

              {/* Action Buttons: WhatsApp sync & New Booking */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={whatsappBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider rounded-xs transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Confirmation via WhatsApp</span>
                </a>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-semibold rounded-xs transition-colors"
                >
                  Book Another Vehicle
                </button>
              </div>
            </div>
          ) : (
            /* Active Form */
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
                  <label htmlFor="name" className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                    Full Name <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Samuel Mwangi"
                    className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-700 focus:border-amber-500 focus:outline-none rounded-xs text-sm text-zinc-100 placeholder-zinc-600"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="phone" className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                    Phone Number <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 0722 000 000"
                    className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-700 focus:border-amber-500 focus:outline-none rounded-xs text-sm text-zinc-100 placeholder-zinc-600 font-mono-numbers"
                  />
                </div>
              </div>

              {/* Row 2: Vehicle Make & Model */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="vehicleMake" className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                    Vehicle Make <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="vehicleMake"
                    name="vehicleMake"
                    required
                    value={formData.vehicleMake}
                    onChange={handleChange}
                    placeholder="e.g. Toyota, Nissan, Subaru, Isuzu"
                    className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-700 focus:border-amber-500 focus:outline-none rounded-xs text-sm text-zinc-100 placeholder-zinc-600"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="vehicleModel" className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                    Vehicle Model
                  </label>
                  <input
                    type="text"
                    id="vehicleModel"
                    name="vehicleModel"
                    value={formData.vehicleModel}
                    onChange={handleChange}
                    placeholder="e.g. Fielder, Forester, X-Trail, D-Max"
                    className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-700 focus:border-amber-500 focus:outline-none rounded-xs text-sm text-zinc-100 placeholder-zinc-600"
                  />
                </div>
              </div>

              {/* Row 3: Registration Number & Service Required */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="registrationNumber" className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                    Registration Number
                  </label>
                  <input
                    type="text"
                    id="registrationNumber"
                    name="registrationNumber"
                    value={formData.registrationNumber}
                    onChange={handleChange}
                    placeholder="e.g. KDA 123A (Optional)"
                    className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-700 focus:border-amber-500 focus:outline-none rounded-xs text-sm text-zinc-100 placeholder-zinc-600 uppercase font-mono-numbers"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="serviceRequired" className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                    Service Required <span className="text-amber-500">*</span>
                  </label>
                  <select
                    id="serviceRequired"
                    name="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-700 focus:border-amber-500 focus:outline-none rounded-xs text-sm text-zinc-100"
                  >
                    {SERVICES_LIST.map((srv) => (
                      <option key={srv.id} value={srv.name} className="bg-zinc-900 text-zinc-100">
                        {srv.name} ({srv.estimatedPriceKES})
                      </option>
                    ))}
                    <option value="Complete Major Service" className="bg-zinc-900 text-zinc-100">
                      Complete Major Service
                    </option>
                    <option value="Pre-Purchase / Pre-Trip Inspection" className="bg-zinc-900 text-zinc-100">
                      Pre-Purchase / Safari Pre-Trip Inspection
                    </option>
                    <option value="Other Repair" className="bg-zinc-900 text-zinc-100">
                      Other Specific Repair
                    </option>
                  </select>
                </div>
              </div>

              {/* Row 4: Preferred Date */}
              <div className="space-y-1.5">
                <label htmlFor="preferredDate" className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-700 focus:border-amber-500 focus:outline-none rounded-xs text-sm text-zinc-100"
                />
              </div>

              {/* Row 5: Additional Details */}
              <div className="space-y-1.5">
                <label htmlFor="additionalDetails" className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                  Additional Details
                </label>
                <textarea
                  id="additionalDetails"
                  name="additionalDetails"
                  rows={3}
                  value={formData.additionalDetails}
                  onChange={handleChange}
                  placeholder="Describe any symptoms, previous repairs, or particular parts you want us to inspect..."
                  className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-700 focus:border-amber-500 focus:outline-none rounded-xs text-sm text-zinc-100 placeholder-zinc-600"
                />
              </div>

              {/* Button: "Request Service" */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm uppercase tracking-wider rounded-xs transition-colors shadow-sm"
                >
                  Request Service
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-zinc-500 pt-1">
                <span>Direct garage phone assistance:</span>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-zinc-400 hover:text-white font-mono-numbers underline">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
