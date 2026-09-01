import { browserClient } from "@/lib/api-client/browser-client";

export const terminateAgreement = async (rentalAgreementId: string) => {
  await browserClient(`/api/rental-agreement/${rentalAgreementId}`, {
    method: "PATCH",
    cache: "no-store",
  });
};
