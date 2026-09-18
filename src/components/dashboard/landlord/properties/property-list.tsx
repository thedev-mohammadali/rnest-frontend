import { getMyProperties } from "@/services/property.service";

import LandlordPropertyCard from "./landlord-property-card";
import PropertyEmptyState from "./property-empty-state";
import PropertyPagination from "./property-pagination";

type Props = {
  searchParams: Promise<{
    page?: string;
  }>;
};

const PropertyList = async ({ searchParams }: Props) => {
  const { page } = await searchParams;

  const currentPage = Math.max(1, Number(page) || 1);

  const { properties, totalProperties, totalPages } = await getMyProperties(
    currentPage,
    6,
  );

  if (properties.length === 0) {
    return <PropertyEmptyState />;
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {properties.map((property) => (
          <LandlordPropertyCard key={property.id} property={property} />
        ))}
      </div>

      {totalPages > 1 && (
        <PropertyPagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalProperties={totalProperties}
        />
      )}
    </div>
  );
};

export default PropertyList;
