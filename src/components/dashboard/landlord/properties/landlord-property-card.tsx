import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { formatCurrency } from "@/lib/formatter/currency";
import { Property } from "@/types/property";
import { MapPin } from "lucide-react";
import PropertyActions from "./property-actions";
import PropertyStatusBadge from "./property-status-badge";

type Props = {
  property: Property;
};

const LandlordPropertyCard = ({ property }: Props) => {
  return (
    <Card className="overflow-hidden">
      <div className="bg-muted aspect-video" />

      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <CardTitle>{property.title}</CardTitle>

          <PropertyStatusBadge
            status={property.isAvailable ? "AVAILABLE" : "RENTED"}
          />
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground flex items-center gap-1">
          <MapPin className="size-4" /> <span>{property.location}</span>
        </p>

        <p className="mt-3 text-xl font-bold">
          {formatCurrency(property.rent, "BDT")}/month
        </p>
      </CardContent>

      <CardFooter>
        <PropertyActions />
      </CardFooter>
    </Card>
  );
};

export default LandlordPropertyCard;
