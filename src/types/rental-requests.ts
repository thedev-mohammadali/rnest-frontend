export type RentalRequestStatus =
  "PENDING" | "APPROVED" | "REJECTED" | "CANCELLED";

export type RentalRequestTenant = {
  id: string;
  name: string;
  email: string;
};

export type RentalRequestProperty = {
  id: string;
  title: string;
  location: string;
  rent: string;
};

export type RentalRequest = {
  id: string;
  tenantId: string;
  propertyId: string;
  status: RentalRequestStatus;
  tenantMessage: string;
  requestedMoveInDate: string;
  durationInMonths: number;
  createdAt: string;
  updatedAt: string;
  tenant: RentalRequestTenant;
  property: RentalRequestProperty;
};

export type RentalRequestResponse = {
  success: boolean;
  message: string;
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  data: RentalRequest[];
};
