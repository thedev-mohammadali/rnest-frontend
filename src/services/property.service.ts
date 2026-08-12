import serverClient from "@/lib/api-client/serverClient";
import { ApiResponse, PaginatedResponse } from "@/types/api";
import { Property } from "@/types/property";

export const getFeaturedProperties = async () => {
  const result: PaginatedResponse<Property> = await serverClient(
    "/properties?limit=6",
    {
      next: {
        revalidate: 60,
      },
    },
  );

  return result.data;
};

export const getPropertyById = async (id: string): Promise<Property> => {
  const result: ApiResponse<Property> = await serverClient(
    `/properties/${id}`,
    {
      next: {
        revalidate: 60,
      },
    },
  );

  return result.data;
};
