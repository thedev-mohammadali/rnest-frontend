import serverClient from "@/lib/api-client/serverClient";
import { ApiResponse, PaginatedResponse } from "@/types/api";
import { MyPropertiesResponse, Property } from "@/types/property";

export const getFeaturedProperties = async () => {
  const res = await serverClient("/properties?limit=6", {
    next: {
      revalidate: 60,
    },
  });

  const result: PaginatedResponse<Property> = await res.json();

  return result.data;
};

export const getAllProperties = async () => {
  const res = await serverClient("/properties", {
    next: {
      revalidate: 60,
    },
  });

  const result: PaginatedResponse<Property> = await res.json();

  return result.data;
};

export const getPropertyById = async (id: string): Promise<Property> => {
  const res = await serverClient(`/properties/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  const result: ApiResponse<Property> = await res.json();

  return result.data;
};

export const getMyProperties = async (page: number = 1, limit: number = 6) => {
  const res = await serverClient(`/properties/me?page=${page}&limit=${limit}`, {
    next: {
      revalidate: 60,
    },
  });

  const result: MyPropertiesResponse = await res.json();

  return {
    properties: result.data.properties,
    totalProperties: result.meta.total,
    totalPages: result.meta.totalPages,
    currentPage: result.meta.page,
    availableProperties: result.data.summary.available,
  };
};
