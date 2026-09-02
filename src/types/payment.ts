export type PaymentCheckoutResponse = {
  success: boolean;
  message: string;
  data: {
    checkoutUrl: string;
  };
};

export type PaymentStatus = "PENDING" | "PAID";

export type PaymentProvider = "STRIPE";

export type PaymentMetadata = {
  email: string;
  amount: number;
  currency: string;
  tenantId: string;
  paymentId: string;
  propertyTitle: string;
  rentalRequestId: string;
  rentalAgreementId: string;
};

export type Payment = {
  id: string;
  rentalAgreementId: string;
  amount: string;
  currency: string;
  status: PaymentStatus;
  provider: PaymentProvider;
  stripeSessionId: string;
  sessionExpiresAt: string | null;
  stripePaymentIntentId: string | null;
  failureReason: string | null;
  metadata: PaymentMetadata | null;
  paidAt: string | null;
  createdAt: string;
  updatedAt: string;
};

export type PaymentSummary = {
  pending: {
    amount: string;
    count: number;
  };
  paid: {
    amount: string;
    count: number;
  };
};

export type PaymentMeta = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export type PaymentsResponse = {
  success: boolean;
  message: string;
  meta: PaymentMeta;
  data: {
    payments: Payment[];
    summary: PaymentSummary;
  };
};

export type PaymentVerificationResponse = {
  success: boolean;
  message: string;
  data: {
    id: string;
    amount: string;
    currency: string;
    status: PaymentStatus;
    provider: PaymentProvider;
    propertyTitle: string;
    rentalAgreementId: string;
    stripeSessionId: string;
    paymentStatus: string;
  };
};
