import { RentalRequest } from "@/types/dashboard";
import RentalRequestCard from "./rental-request-card";

const requests: RentalRequest[] = [
  {
    id: "1",
    property: "Modern Apartment",
    location: "Dhaka, Bangladesh",
    rent: 25000,
    status: "PENDING",
    date: "Aug 07, 2026",
  },

  {
    id: "2",
    property: "Luxury Villa",
    location: "Chittagong",
    rent: 40000,
    status: "APPROVED",
    date: "Aug 02, 2026",
  },
];

const RentalRequestList = () => {
  return (
    <div className="space-y-4">
      {requests.map((request) => (
        <RentalRequestCard key={request.id} request={request} />
      ))}
    </div>
  );
};

export default RentalRequestList;
