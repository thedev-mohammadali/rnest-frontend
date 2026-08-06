import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PropertyFilters = () => {
  return (
    <div className="space-y-5">
      <div>
        <Label>Search</Label>

        <Input placeholder="Apartment, house..." />
      </div>

      <div>
        <Label>Category</Label>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="apartment">Apartment</SelectItem>

            <SelectItem value="house">House</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label>Location</Label>

        <Input placeholder="Dhaka" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label>Min Rent</Label>

          <Input type="number" />
        </div>

        <div>
          <Label>Max Rent</Label>

          <Input type="number" />
        </div>
      </div>

      <Button className="w-full">Apply Filters</Button>
    </div>
  );
};

export default PropertyFilters;
