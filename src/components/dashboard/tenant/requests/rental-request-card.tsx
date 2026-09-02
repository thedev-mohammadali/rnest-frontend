import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/formatter/currency";
import { formatDateTime } from "@/lib/formatter/date";
import { RentalRequest } from "@/types/rental-requests";
import { MapPin } from "lucide-react";
import Link from "next/link";
import CancelRequestButton from "./cancel-request-button";
import RequestStatusBadge from "./request-status-badge";

type Props = {
  request: RentalRequest;
};

const RentalRequestCard = ({ request }: Props) => {
  return (
    <Card>
      <CardContent className="flex flex-col gap-5 p-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">{request.property.title}</h3>

          <p className="text-muted-foreground flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            {request.property.location}
          </p>

          <p className="font-medium">
            {formatCurrency(request.property.rent, "BDT")}/month
          </p>

          <p className="text-muted-foreground text-sm">
            Requested on {formatDateTime(request.createdAt)}
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 md:items-end">
          <RequestStatusBadge status={request.status} />

          <div className="flex gap-2">
            <Button variant="outline" asChild>
              <Link href={`/properties/${request.propertyId}`}>
                View Property
              </Link>
            </Button>

            {request.status === "PENDING" && (
              <CancelRequestButton requestId={request.id} />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RentalRequestCard;
