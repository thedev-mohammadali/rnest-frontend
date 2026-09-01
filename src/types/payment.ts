export type PaymentCheckoutResponse = {
  success: boolean;
  message: string;
  data: {
    checkoutUrl: string;
  };
};
