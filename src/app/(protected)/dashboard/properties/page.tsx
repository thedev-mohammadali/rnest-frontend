import { Suspense } from "react";

import CreatePropertyButton from "@/components/dashboard/landlord/properties/create-property-button";
import PropertyList from "@/components/dashboard/landlord/properties/property-list";
import PropertyListSkeleton from "@/components/dashboard/landlord/properties/property-list-skeleton";

type Props = {
  searchParams: Promise<{
    page?: string;
  }>;
};

const PropertiesPage = ({ searchParams }: Props) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">My Properties</h1>

          <p className="text-muted-foreground">Manage your rental properties</p>
        </div>

        <CreatePropertyButton />
      </div>

      <Suspense fallback={<PropertyListSkeleton />}>
        <PropertyList searchParams={searchParams} />
      </Suspense>
    </div>
  );
};

export default PropertiesPage;
