import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Checkbox } from "@/components/ui/checkbox";

const categories = ["Apartment", "Villa", "House"];

const PropertyFilters = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div>
          <h3 className="mb-3 font-medium">Category</h3>

          <div className="space-y-3">
            {categories.map((category) => (
              <div key={category} className="flex items-center gap-2">
                <Checkbox />

                <span>{category}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-3 font-medium">Location</h3>

          <p className="text-muted-foreground text-sm">Coming soon</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyFilters;
