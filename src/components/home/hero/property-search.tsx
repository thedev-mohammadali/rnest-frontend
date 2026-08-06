import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const PropertySearch = () => {
  return (
    <div className="bg-background mx-auto mt-10 flex max-w-3xl flex-col items-center justify-center gap-3 rounded-xl border p-4 shadow-sm md:flex-row lg:mx-0 lg:max-w-xl">
      <Input placeholder="Search by location..." className="flex-1" />
      <Button className="w-fit">
        <Search className="h-4 w-4" />
        Search
      </Button>
    </div>
  );
};

export default PropertySearch;
