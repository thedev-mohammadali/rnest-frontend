export const RentalAgreementStatus = {
  PENDING_PAYMENT: "PENDING_PAYMENT",
  ACTIVE: "ACTIVE",
  COMPLETED: "COMPLETED",
  TERMINATED: "TERMINATED",
  CANCELLED: "CANCELLED",
} as const;

export type RentalAgreementStatus =
  (typeof RentalAgreementStatus)[keyof typeof RentalAgreementStatus];

export type RentalAgreementTenant = {
  id: string;
  name: string;
};

export type RentalAgreementProperty = {
  id: string;
  title: string;
  rent: string;
  location: string;
};

export type RentalAgreement = {
  id: string;
  tenant: RentalAgreementTenant;
  property: RentalAgreementProperty;
  status: RentalAgreementStatus;
  activatedAt: string | null;
  leaseStartDate: string;
  leaseEndDate: string;
  createdAt: string;
  updatedAt: string;
};

export type RentalAgreementResponse = {
  success: boolean;
  message: string;
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  data: RentalAgreement[];
};
