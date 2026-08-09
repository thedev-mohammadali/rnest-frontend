import { X } from "lucide-react";

import { Button } from "@/components/ui/button";

const filters = ["Apartment", "Dhaka", "৳20k-50k"];

const ActiveFilters = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <Button key={filter} variant="secondary" size="sm" className="gap-2">
          {filter}

          <X className="h-3 w-3" />
        </Button>
      ))}
    </div>
  );
};

export default ActiveFilters;
