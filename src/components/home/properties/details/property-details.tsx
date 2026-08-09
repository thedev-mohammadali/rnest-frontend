import BookingCard from "./booking-card";
import PropertyFeatures from "./property-features";
import PropertyGallery from "./property-gallery";
import PropertyInfo from "./property-info";

const PropertyDetails = () => {
  return (
    <main className="container mx-auto space-y-10 px-4 py-8">
      <PropertyGallery />

      <div className="grid gap-10 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <PropertyInfo />

          <PropertyFeatures />
        </div>

        <aside className="lg:col-span-1">
          <BookingCard />
        </aside>
      </div>
    </main>
  );
};

export default PropertyDetails;
