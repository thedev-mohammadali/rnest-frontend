import { formatCurrency } from "@/lib/formatter/currency";
import { Property } from "@/types/property";
import { MapPin, User } from "lucide-react";

type Props = {
  property: Property;
};

const PropertyInfo = ({ property }: Props) => {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-4xl font-semibold tracking-tight">
          {property.title}
        </h1>

        <div className="text-muted-foreground flex items-center gap-2">
          <MapPin className="size-4" />

          <span>{property.location}</span>
        </div>

        <div className="text-muted-foreground flex items-center gap-2">
          <User className="size-4" />

          <span>{property.landlord.name}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <span className="bg-muted rounded-full px-3 py-1 text-sm">
          {property.category.name}
        </span>

        <span
          className={`rounded-full px-3 py-1 text-sm font-medium ${
            property.isAvailable
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {property.isAvailable ? "Available" : "Rented"}
        </span>
      </div>

      <div>
        <p className="text-3xl font-bold">
          {formatCurrency(property.rent, "BDT")}
          <span className="text-muted-foreground text-base font-normal">
            {" "}
            / month
          </span>
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">About this property</h2>

        <p className="text-muted-foreground leading-7">
          {property.description}
        </p>
      </div>
    </section>
  );
};

export default PropertyInfo;
