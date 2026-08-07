import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import PropertyActions from "./property-actions";
import PropertyStatusBadge from "./property-status-badge";

type Props = {
  property: {
    id: string;
    title: string;
    location: string;
    rent: number;
    status: "AVAILABLE" | "RENTED";
  };
};

const LandlordPropertyCard = ({ property }: Props) => {
  return (
    <Card className="overflow-hidden">
      <div className="bg-muted aspect-video" />

      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <CardTitle>{property.title}</CardTitle>

          <PropertyStatusBadge status={property.status} />
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground">📍 {property.location}</p>

        <p className="mt-3 text-xl font-bold">৳{property.rent}/month</p>
      </CardContent>

      <CardFooter>
        <PropertyActions />
      </CardFooter>
    </Card>
  );
};

export default LandlordPropertyCard;
