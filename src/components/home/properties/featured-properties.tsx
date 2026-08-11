import { getFeaturedProperties } from "@/services/property.service";
import PropertyCard from "./grid/property-card";

const FeaturedProperties = async () => {
  const properties = await getFeaturedProperties();
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default FeaturedProperties;
