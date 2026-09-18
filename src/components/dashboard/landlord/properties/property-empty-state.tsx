import { Building2 } from "lucide-react";

const PropertyEmptyState = () => {
  return (
    <div className="bg-card flex min-h-100 flex-col items-center justify-center rounded-xl border border-dashed px-6 py-12 text-center">
      <div className="bg-muted mb-5 flex size-16 items-center justify-center rounded-full">
        <Building2 className="text-muted-foreground size-8" />
      </div>

      <h2 className="text-xl font-semibold">No properties yet</h2>

      <p className="text-muted-foreground mt-2 max-w-md text-sm">
        You haven&apos;t added any rental properties yet. Click{" "}
        <span className="font-medium">Create Property</span> above to add your
        first listing.
      </p>
    </div>
  );
};

export default PropertyEmptyState;
