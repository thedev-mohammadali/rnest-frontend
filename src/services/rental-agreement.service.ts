import serverClient from "@/lib/api-client/serverClient";

export const getMyRentalAgreements = async () => {
  const response = await serverClient("/rental-agreements", {
    cache: "no-store",
  });

  return await response.json();
};
