import { Card, CardContent } from "@/components/ui/card";

import RequestActions from "./request-actions";
import RequestStatusBadge from "./request-status-badge";

type Props = {
  request: {
    id: string;
    tenant: string;
    property: string;
    location: string;
    rent: number;
    status: "PENDING" | "APPROVED" | "REJECTED";
    date: string;
  };
};

const RentalRequestCard = ({ request }: Props) => {
  return (
    <Card>
      <CardContent className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">{request.tenant}</h3>

          <p className="text-muted-foreground">Property: {request.property}</p>

          <p className="text-muted-foreground">📍 {request.location}</p>

          <p className="font-medium">৳{request.rent}/month</p>

          <p className="text-muted-foreground text-sm">
            Requested on {request.date}
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 md:items-end">
          <RequestStatusBadge status={request.status} />

          <RequestActions status={request.status} />
        </div>
      </CardContent>
    </Card>
  );
};

export default RentalRequestCard;
