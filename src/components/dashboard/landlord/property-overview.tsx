import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/formatter/currency";
import { getMyProperties } from "@/services/property.service";
import { Banknote, Home, MapPin } from "lucide-react";

import PropertyStatusBadge from "./properties/property-status-badge";

const PropertyOverview = async () => {
  const { properties } = await getMyProperties(1, 2);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Properties</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {properties.map((property) => (
          <div key={property.id} className="rounded-lg border p-3">
            <div className="flex justify-between gap-4">
              <p className="flex min-w-0 items-center gap-1.5 font-medium">
                <Home className="text-muted-foreground size-4 shrink-0" />
                <span className="truncate">{property.title}</span>
              </p>

              <PropertyStatusBadge
                status={property.isAvailable ? "AVAILABLE" : "RENTED"}
              />
            </div>

            <p className="text-muted-foreground mt-1 flex items-center gap-1.5 text-sm">
              <MapPin className="size-3.5 shrink-0" />
              <span className="truncate">{property.location}</span>
            </p>

            <p className="mt-2 flex items-center gap-1.5 font-semibold">
              <Banknote className="size-4" />
              {formatCurrency(property.rent, "BDT")}/month
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default PropertyOverview;
