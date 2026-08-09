"use client";

import { SlidersHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import PropertyFilters from "./property-filters";

const MobileFilter = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 lg:hidden">
          <SlidersHorizontal className="h-4 w-4" />
          Filters
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-[320px]">
        <SheetHeader>
          <SheetTitle>Filter Properties</SheetTitle>
        </SheetHeader>

        <div className="mt-6">
          <PropertyFilters />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileFilter;
