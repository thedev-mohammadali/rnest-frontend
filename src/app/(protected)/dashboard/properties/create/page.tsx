import PropertyForm from "@/components/dashboard/landlord/properties/create/property-form";

const CreatePropertyPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Create Property</h1>

        <p className="text-muted-foreground">Add a new rental property</p>
      </div>

      <PropertyForm />
    </div>
  );
};

export default CreatePropertyPage;
