import LandlordPropertyCard from "./landlord-property-card";

const properties = [
  {
    id: "1",
    title: "Modern Apartment",
    location: "Dhaka, Bangladesh",
    rent: 25000,
    status: "AVAILABLE",
  },

  {
    id: "2",
    title: "Luxury Villa",
    location: "Chittagong",
    rent: 40000,
    status: "RENTED",
  },
];

const PropertyList = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {properties.map((property) => (
        <LandlordPropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyList;
