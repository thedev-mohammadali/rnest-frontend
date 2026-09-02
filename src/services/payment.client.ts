import { browserClient } from "@/lib/api-client/browser-client";
import { PaymentCheckoutResponse } from "@/types/payment";

export const checkout = async (rentalAgreementId: string) => {
  const paymentResponse = await browserClient<PaymentCheckoutResponse>(
    `/api/payment/${rentalAgreementId}`,
    {
      method: "POST",
      cache: "no-store",
    },
  );

  return paymentResponse.data.checkoutUrl;
};
