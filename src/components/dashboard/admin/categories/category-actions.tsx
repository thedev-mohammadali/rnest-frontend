"use client";

import { Button } from "@/components/ui/button";

const CategoryActions = () => {
  return (
    <div className="flex gap-2">
      <Button variant="outline" size="sm">
        Edit
      </Button>

      <Button variant="destructive" size="sm">
        Delete
      </Button>
    </div>
  );
};

export default CategoryActions;
