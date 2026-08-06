import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PropertySort = () => {
  return (
    <div className="flex items-center gap-3">
      <span className="text-muted-foreground text-sm">Sort:</span>

      <Select defaultValue="newest">
        <SelectTrigger className="w-40">
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="newest">Newest</SelectItem>

          <SelectItem value="price-low">Price Low</SelectItem>

          <SelectItem value="price-high">Price High</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default PropertySort;
