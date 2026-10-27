export type ScreenId = 'home' | 'catalog' | 'doctor' | 'schedule' | 'map' | 'confirmation';

export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialty: string;
  crm: string;
  rqe?: string;
  rating: number;
  reviewCount: number;
  price: number;
  experienceYears?: number;
  fellowship?: string;
  membership?: string;
  avatar: string;
  fullImage?: string;
  availableLabel: string;
  isOnlineTomorrow?: boolean;
  hospital?: string;
  bio?: string;
  procedures?: string[];
  unit: string;
}

export interface ServiceProcedure {
  id: string;
  title: string;
  subtitle: string;
  category: 'consultas' | 'estetica' | 'exames' | 'longevidade';
  categoryLabel: string;
  tag: string;
  badge?: string;
  doctorName: string;
  doctorRole: string;
  duration: string;
  price: number;
  pricePrefix?: string;
  features: string[];
}

export interface ClinicUnit {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  address: string;
  neighborhood: string;
  city: string;
  distanceTime: string;
  trafficStatus: string;
  hours: string;
  amenities: { icon: string; label: string }[];
  phone: string;
  photos: { url: string; caption: string }[];
  coordinates: { x: number; y: number };
}

export interface PatientReview {
  id: string;
  author: string;
  initials: string;
  timeAgo: string;
  rating: number;
  procedure: string;
  date: string;
  comment: string;
}

export interface BookingState {
  doctor: Doctor;
  procedureName: string;
  unit: ClinicUnit;
  date: string;
  dayNumber: number;
  monthYear: string;
  timeSlot: string;
  timePeriod: 'morning' | 'afternoon' | 'night';
  price: number;
  protocolNumber: string;
  patientName: string;
  patientId: string;
}
