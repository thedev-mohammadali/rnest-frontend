import BookingCard from "./booking-card";
import PropertyFeatures from "./property-features";
import PropertyGallery from "./property-gallery";
import PropertyInfo from "./property-info";

const images = [
  "/images/auth-login-1.png",
  "/images/auth-register-1.png",
  "/images/hero-home.jpg",
];

const PropertyDetails = () => {
  return (
    <main className="container mx-auto space-y-10 px-4 py-10">
      <PropertyGallery images={images} />

      <div className="grid gap-10 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <PropertyInfo />

          <PropertyFeatures />
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-24">
            <BookingCard />
          </div>
        </aside>
      </div>
    </main>
  );
};

export default PropertyDetails;
