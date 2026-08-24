export type RentalAgreementStatus = "PENDING_PAYMENT" | "ACTIVE" | "CANCELLED";

export type AgreementTenant = {
  id: string;
  name: string;
};

export type AgreementProperty = {
  id: string;
  title: string;
  rent: string;
  location: string;
};

export type RentalAgreement = {
  id: string;
  tenant: AgreementTenant;
  property: AgreementProperty;
  status: RentalAgreementStatus;
  activatedAt: string;
  leaseStartDate: string;
  leaseEndDate: string;
  createdAt: string;
  updatedAt: string;
};
