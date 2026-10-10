import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EmergencyBanner } from './components/EmergencyBanner';
import { TargetCustomers } from './components/TargetCustomers';
import { ServicesSection } from './components/ServicesSection';
import { DiagnosticSymptomHelper } from './components/DiagnosticSymptomHelper';
import { VehicleTypesSection } from './components/VehicleTypesSection';
import { ServicePackages } from './components/ServicePackages';
import { BookingForm } from './components/BookingForm';
import { QuoteRequestForm } from './components/QuoteRequestForm';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuickActionFloat } from './components/QuickActionFloat';

export default function App() {
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string>('');
  const [selectedMakeForBooking, setSelectedMakeForBooking] = useState<string>('');
  const [selectedProblemForQuote, setSelectedProblemForQuote] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenBooking = () => {
    scrollToSection('book-service');
  };

  const handleOpenQuote = () => {
    scrollToSection('quote-request');
  };

  const handleSelectServiceForBooking = (serviceName: string) => {
    setSelectedServiceForBooking(serviceName);
    scrollToSection('book-service');
  };

  const handleSelectVehicleForBooking = (brandName: string) => {
    setSelectedMakeForBooking(brandName);
    scrollToSection('book-service');
  };

  const handleSelectSymptom = (symptomText: string) => {
    setSelectedProblemForQuote(symptomText);
    scrollToSection('quote-request');
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans pb-16 lg:pb-0">
      {/* Navigation Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Emergency Roadside Assistance Banner */}
      <EmergencyBanner />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Home Hero */}
        <Hero
          onBookClick={handleOpenBooking}
          onQuoteClick={handleOpenQuote}
        />

        {/* Target Customers (Private, Taxi, Fleets, Travelers) */}
        <TargetCustomers onOpenBooking={handleOpenBooking} />

        {/* Core Services Section (9 Categories) */}
        <ServicesSection
          onSelectServiceForBooking={handleSelectServiceForBooking}
        />

        {/* Important Sales Feature: "Not Sure What's Wrong With Your Car?" */}
        <DiagnosticSymptomHelper
          onSelectSymptom={handleSelectSymptom}
          onOpenDescribeProblem={handleOpenQuote}
        />

        {/* Vehicle Types (Toyota, Nissan, Subaru, Mazda, Mercedes-Benz, Commercial) */}
        <VehicleTypesSection
          onSelectVehicleForBooking={handleSelectVehicleForBooking}
        />

        {/* Transparent Service Packages & Pricing */}
        <ServicePackages
          onSelectPackage={handleSelectServiceForBooking}
        />

        {/* Service Booking Form */}
        <BookingForm
          initialService={selectedServiceForBooking}
          initialMake={selectedMakeForBooking}
        />

        {/* Quote Request Form ("Describe Your Problem") with simulated photo upload */}
        <QuoteRequestForm
          initialProblem={selectedProblemForQuote}
        />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* About Section */}
        <AboutSection />

        {/* Contact & Map Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={handleOpenBooking}
        onOpenQuote={handleOpenQuote}
      />

      {/* Mobile Sticky Quick Action Bar */}
      <QuickActionFloat
        onOpenBooking={handleOpenBooking}
      />
    </div>
  );
}
