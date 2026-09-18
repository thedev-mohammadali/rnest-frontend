import { browserClient } from "@/lib/api-client/browser-client";

export type CreatePropertyPayload = {
  title: string;
  description: string;
  rent: number;
  location: string;
  amenities?: string[];
  bedrooms?: number;
  bathrooms?: number;
  size?: number;
  images?: string[];
  categoryId: string;
};

export type UpdatePropertyPayload = Partial<CreatePropertyPayload>;

export const createProperty = async (payload: CreatePropertyPayload) => {
  return browserClient("/api/properties", {
    method: "POST",
    body: JSON.stringify(payload),
    cache: "no-store",
  });
};

export const updateProperty = async (
  propertyId: string,
  payload: UpdatePropertyPayload,
) => {
  return browserClient(`/api/properties/${propertyId}`, {
    method: "PATCH",
    body: JSON.stringify(payload),
    cache: "no-store",
  });
};
