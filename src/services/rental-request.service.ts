import serverClient from "@/lib/api-client/serverClient";

export const getMyRentalRequests = async (limit: number) => {
  const response = await serverClient(`/rental-requests?limit=${limit}`, {
    cache: "no-store",
  });

  return await response.json();
};
