export interface ServiceItem {
  id: string;
  name: string;
  category: 'mechanical' | 'diagnostics' | 'routine' | 'handling';
  shortDescription: string;
  fullDescription: string;
  estimatedDuration: string;
  estimatedPriceKES: string;
  commonSymptoms: string[];
  iconName: string;
}

export interface VehicleType {
  id: string;
  brand: string;
  popularModels: string[];
  commonRepairs: string[];
  notes: string;
}

export interface ServiceBookingPayload {
  name: string;
  phone: string;
  vehicleMake: string;
  vehicleModel: string;
  registrationNumber: string;
  serviceRequired: string;
  preferredDate: string;
  additionalDetails: string;
}

export interface QuoteRequestPayload {
  name: string;
  phone: string;
  vehicle: string;
  problem: string;
  photoName?: string;
  photoUrl?: string;
}

export interface DiagnosticSymptom {
  id: string;
  symptom: string;
  likelyArea: string;
  recommendedAction: string;
  serviceCategory: string;
}
