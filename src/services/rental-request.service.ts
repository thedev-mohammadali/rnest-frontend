import serverClient from "@/lib/api-client/serverClient";

export const getMyRentalRequests = async () => {
  const response = await serverClient("/rental-requests", {
    cache: "no-store",
  });

  return await response.json();
};
