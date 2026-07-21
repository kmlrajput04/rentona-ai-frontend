// ==========================================
// Rentora AI Domain Entity Types
// ==========================================

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'tenant' | 'provider' | 'admin' | 'super-admin';
  verified: boolean;
  avatarUrl?: string;
  createdAt: string;
}

export interface PropertyLocation {
  address: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  lat: number;
  lng: number;
}

export interface PropertyHost {
  id: string;
  name: string;
  avatarUrl: string;
  verified: boolean;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  location: PropertyLocation;
  images: string[];
  amenities: string[];
  host: PropertyHost;
  rating: number;
  reviewsCount: number;
  status: 'available' | 'pending' | 'booked';
  createdAt: string;
}

export interface Booking {
  id: string;
  propertyId: string;
  tenantId: string;
  startDate: string;
  endDate: string;
  depositAmount: number;
  monthlyRent: number;
  currency: string;
  status: 'submitted' | 'screening' | 'approved' | 'signed' | 'completed';
  agreementUrl?: string;
  createdAt: string;
}

export interface RelocationTask {
  id: string;
  title: string;
  description: string;
  category: 'visa' | 'finance' | 'housing' | 'travel' | 'compliance';
  status: 'pending' | 'in_progress' | 'completed';
  dueDate?: string;
}

export interface RelocationChecklist {
  userId: string;
  tasks: RelocationTask[];
  progressPercentage: number;
  updatedAt: string;
}

export interface CommunityPost {
  id: string;
  authorId: string;
  authorName: string;
  authorAvatarUrl?: string;
  title: string;
  content: string;
  category: 'roommates' | 'marketplace' | 'events' | 'circles' | 'general';
  likesCount: number;
  commentsCount: number;
  createdAt: string;
}
