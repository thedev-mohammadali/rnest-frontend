import { Card, CardContent } from "@/components/ui/card";

import { formatCurrency } from "@/lib/formatter/currency";
import { formatDate } from "@/lib/formatter/date";
import { RentalRequest } from "@/types/rental-requests";
import { MapPin } from "lucide-react";
import RequestActions from "./request-actions";
import RequestStatusBadge from "./request-status-badge";

type Props = {
  request: RentalRequest;
};

const RentalRequestCard = ({ request }: Props) => {
  return (
    <Card>
      <CardContent className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">{request.tenant.name}</h3>

          <p className="text-muted-foreground">
            Property: {request.property.title}
          </p>

          <p className="text-muted-foreground flex items-center gap-1">
            <MapPin className="size-4" />{" "}
            <span>{request.property.location}</span>
          </p>

          <p className="font-medium">
            {formatCurrency(request.property.rent, "BDT")}/month
          </p>

          <p className="text-muted-foreground text-sm">
            Requested on {formatDate(request.createdAt)}
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
