import serverClient from "@/lib/api-client/serverClient";
import { ApiResponse, PaginatedResponse } from "@/types/api";
import { Property } from "@/types/property";

const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getFeaturedProperties = async () => {
  if (process.env.NODE_ENV === "development") {
    await delay(1000);
  }

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
  if (process.env.NODE_ENV === "development") {
    await delay(1000);
  }

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
