"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

const PropertySearch = () => {
  return (
    <div className="relative max-w-xl">
      <Search className="text-muted-foreground absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2" />

      <Input
        placeholder="Search location or property..."
        className="h-12 pl-10"
      />
    </div>
  );
};

export default PropertySearch;
