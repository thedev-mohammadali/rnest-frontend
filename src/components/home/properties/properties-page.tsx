import { getAllProperties } from "@/services/property.service";
import MobileFilter from "./filters/mobile-filter";
import PropertyFilters from "./filters/property-filters";
import PropertyGrid from "./grid/property-grid";
import PropertyPageHeader from "./header/property-page-header";
import Pagination from "./pagination";
import PropertySort from "./property-sort";

const Properties = async () => {
  const properties = await getAllProperties();

  return (
    <main className="container mx-auto space-y-8 px-4 py-8">
      <PropertyPageHeader />

      <div className="grid gap-8 lg:grid-cols-4">
        <aside className="hidden lg:block">
          <PropertyFilters />
        </aside>

        <section className="space-y-6 lg:col-span-3">
          <div className="flex items-center justify-between">
            <MobileFilter />

            <PropertySort />
          </div>

          <PropertyGrid properties={properties} />

          <Pagination />
        </section>
      </div>
    </main>
  );
};

export default Properties;
