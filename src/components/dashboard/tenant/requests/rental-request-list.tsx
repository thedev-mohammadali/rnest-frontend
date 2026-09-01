import { getMyRentalRequests } from "@/services/rental-request.service";
import { RentalRequestResponse } from "@/types/rental-requests";
import RentalRequestCard from "./rental-request-card";

const RentalRequestList = async () => {
  const requestsResponse: RentalRequestResponse = await getMyRentalRequests();
  const requests = requestsResponse.data;

  return (
    <div className="space-y-4">
      {requests?.map((request) => (
        <RentalRequestCard key={request.id} request={request} />
      ))}
    </div>
  );
};

export default RentalRequestList;
