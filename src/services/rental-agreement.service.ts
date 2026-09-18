import serverClient from "@/lib/api-client/serverClient";
import { ApiResponse } from "@/types/api";
import { RentalAgreementResponse } from "@/types/rental-agreement";

export const getMyRentalAgreements = async () => {
  const response = await serverClient("/rental-agreements");

  const result: RentalAgreementResponse = await response.json();

  return result.data;
};

export const getRecentActiveAgreement = async () => {
  const response = await serverClient(
    "/rental-agreements?status=ACTIVE&sortBy=activatedAt",
    {
      cache: "no-store",
    },
  );

  const result: RentalAgreementResponse = await response.json();

  return result.data.agreements[0];
};

export const getLatestPendingPayment = async () => {
  const response = await serverClient(
    "/rental-agreements?status=PENDING_PAYMENT",
    {
      cache: "no-store",
    },
  );

  const result: RentalAgreementResponse = await response.json();

  return result.data.agreements[0];
};

export const getMonthlyRevenue = async () => {
  const response = await serverClient("/rental-agreements/monthly-revenue", {
    next: {
      revalidate: 120,
    },
  });

  const result: ApiResponse<{ monthlyRevenue: number }> = await response.json();

  return result.data.monthlyRevenue;
};
