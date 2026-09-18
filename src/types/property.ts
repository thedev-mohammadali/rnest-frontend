export interface Landlord {
  id: string;
  name: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface Review {
  id?: string;
  [key: string]: unknown;
}

export interface Property {
  id: string;
  landlordId: string;
  title: string;
  description: string;
  rent: string;
  location: string;
  isAvailable: boolean;
  amenities: string[];
  bedrooms: number;
  bathrooms: number;
  size: string;
  images: string[];
  categoryId: string;
  createdAt: string;
  updatedAt: string;
  landlord: Landlord;
  category: Category;
  reviews: Review[];
}

export interface PropertySummary {
  available: number;
}

export interface MyPropertiesResponse {
  success: boolean;
  message: string;
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  data: {
    properties: Property[];
    summary: PropertySummary;
  };
}
