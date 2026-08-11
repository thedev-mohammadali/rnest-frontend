import { Property } from "@/types/property";
import BookingCard from "./booking-card";
import PropertyFeatures from "./property-features";
import PropertyGallery from "./property-gallery";
import PropertyInfo from "./property-info";

type Props = {
  property: Property;
};

const PropertyDetails = ({ property }: Props) => {
  return (
    <main className="container mx-auto space-y-10 px-4 py-10">
      <PropertyGallery images={property.images} />

      <div className="grid gap-10 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <PropertyInfo property={property} />

          <PropertyFeatures property={property} />
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-24">
            <BookingCard property={property} />
          </div>
        </aside>
      </div>
    </main>
  );
};

export default PropertyDetails;
