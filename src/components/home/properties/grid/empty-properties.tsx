import { Home } from "lucide-react";

import { Button } from "@/components/ui/button";

const EmptyProperties = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border py-20">
      <Home className="mb-4 h-10 w-10" />

      <h2 className="text-xl font-semibold">No properties found</h2>

      <p className="text-muted-foreground">Try adjusting your filters</p>

      <Button className="mt-5">Clear Filters</Button>
    </div>
  );
};

export default EmptyProperties;
