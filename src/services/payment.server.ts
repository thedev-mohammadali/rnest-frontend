import serverClient from "@/lib/api-client/serverClient";
import { PaymentsResponse, PaymentVerificationResponse } from "@/types/payment";

export const getAllPayments = async () => {
  const paymentResponse = await serverClient("/payments");

  const paymentData: PaymentsResponse = await paymentResponse.json();

  return paymentData.data;
};

export const verifyPaymentSession = async (sessionId: string) => {
  const response = await serverClient(`/payments/verify-session/${sessionId}`, {
    method: "GET",
    cache: "no-store",
  });

  const paymentRes: PaymentVerificationResponse = await response.json();

  return paymentRes.data;
};
