import PropertyList from "@/components/dashboard/landlord/properties/property-list";

const PropertiesPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">My Properties</h1>

          <p className="text-muted-foreground">Manage your rental properties</p>
        </div>
      </div>

      <PropertyList />
    </div>
  );
};

export default PropertiesPage;
