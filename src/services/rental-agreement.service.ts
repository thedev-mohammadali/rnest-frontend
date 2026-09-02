import serverClient from "@/lib/api-client/serverClient";
import { RentalAgreementResponse } from "@/types/rental-agreement";

export const getMyRentalAgreements = async () => {
  const response = await serverClient("/rental-agreements");

  return await response.json();
};

export const getRecentActiveAgreement = async () => {
  const response = await serverClient(
    "/rental-agreements?status=ACTIVE&sortBy=activatedAt",
    {
      cache: "no-store",
    },
  );

  const data: RentalAgreementResponse = await response.json();

  return data.data[0];
};

export const getLatestPendingPayment = async () => {
  const response = await serverClient(
    "/rental-agreements?status=PENDING_PAYMENT",
    {
      cache: "no-store",
    },
  );

  const data: RentalAgreementResponse = await response.json();

  return data.data[0];
};
