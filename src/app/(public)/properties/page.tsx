import MobileFilter from "@/components/home/properties/mobile-filter";
import Pagination from "@/components/home/properties/pagination";
import PropertyFilters from "@/components/home/properties/property-filters";
import PropertyGrid from "@/components/home/properties/property-grid";
import PropertySort from "@/components/home/properties/property-sort";

import { Card } from "@/components/ui/card";

const PropertiesPage = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Available Properties</h1>

        <p className="text-muted-foreground">Find your next perfect home</p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {/* Desktop Filters */}
        <aside className="hidden lg:col-span-1 lg:block">
          <Card className="sticky top-24 p-4">
            <PropertyFilters />
          </Card>
        </aside>

        <section className="lg:col-span-3">
          {/* Mobile Controls */}
          <div className="mb-6 flex items-center justify-between lg:hidden">
            <MobileFilter />

            <PropertySort />
          </div>

          {/* Desktop Sort */}
          <div className="mb-6 hidden justify-end lg:flex">
            <PropertySort />
          </div>

          <PropertyGrid />

          <Pagination />
        </section>
      </div>
    </main>
  );
};

export default PropertiesPage;
