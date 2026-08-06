import PropertyCard from "./property-card";

const Properties = () => {
  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <PropertyCard key={i} />
      ))}
    </div>
  );
};

export default Properties;
