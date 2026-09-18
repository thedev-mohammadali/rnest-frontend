import serverClient from "@/lib/api-client/serverClient";
import { PaginatedResponse } from "@/types/api";
import { RentalRequest } from "@/types/rental-requests";

export const getMyRentalRequests = async (limit: number = 10) => {
  const response = await serverClient(`/rental-requests?limit=${limit}`, {
    cache: "no-store",
  });

  const result: PaginatedResponse<RentalRequest> = await response.json();

  return result;
};

export const getPendingRequests = async (): Promise<
  PaginatedResponse<RentalRequest>
> => {
  const response = await serverClient(`/rental-requests?status=PENDING`, {
    cache: "no-store",
  });

  return response.json();
};
