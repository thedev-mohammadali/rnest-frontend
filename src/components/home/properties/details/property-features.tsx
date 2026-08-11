import { Property } from "@/types/property";
import { Bath, Bed, Ruler } from "lucide-react";

type Props = {
  property: Property;
};

const PropertyFeatures = ({ property }: Props) => {
  const features = [
    {
      icon: Bed,
      label: "Bedrooms",
      value: property.bedrooms,
    },

    {
      icon: Bath,
      label: "Bathrooms",
      value: property.bathrooms,
    },

    {
      icon: Ruler,
      label: "Size",
      value: `${property.size} sqft`,
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-4">
      {features.map((item) => {
        const Icon = item.icon;

        return (
          <div key={item.label} className="rounded-xl border p-4">
            <Icon className="mb-2 h-5 w-5" />

            <p className="text-muted-foreground text-sm">{item.label}</p>

            <p className="font-semibold">{item.value}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PropertyFeatures;
