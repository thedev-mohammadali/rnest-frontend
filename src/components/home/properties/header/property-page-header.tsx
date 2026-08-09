import PropertySearch from "./property-search";

const PropertyPageHeader = () => {
  return (
    <section className="space-y-5">
      <div>
        <h1 className="text-4xl font-bold">Find your perfect home</h1>

        <p className="text-muted-foreground">
          Explore verified rental properties
        </p>
      </div>

      <PropertySearch />
    </section>
  );
};

export default PropertyPageHeader;
