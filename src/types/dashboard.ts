export type RentalRequestStatus =
  "PENDING" | "APPROVED" | "REJECTED" | "CANCELLED";

export type RentalRequest = {
  id: string;
  property: string;
  location: string;
  rent: number;
  status: RentalRequestStatus;
  date: string;
};
