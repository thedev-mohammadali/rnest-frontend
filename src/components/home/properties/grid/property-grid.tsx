import { Property } from "@/types/property";
import PropertyCard from "./property-card";

type Props = {
  properties: Property[];
};

const PropertyGrid = ({ properties }: Props) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {properties.slice(0, 12).map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyGrid;
