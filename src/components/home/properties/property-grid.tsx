import PropertyCard from "./property-card";

const properties = Array.from({
  length: 12,
});

const PropertyGrid = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {properties.map((_, index) => (
        <PropertyCard key={index} />
      ))}
    </div>
  );
};

export default PropertyGrid;
