import { Bath, Bed, Ruler } from "lucide-react";

const features = [
  {
    icon: Bed,
    label: "Bedrooms",
    value: "3",
  },

  {
    icon: Bath,
    label: "Bathrooms",
    value: "2",
  },

  {
    icon: Ruler,
    label: "Size",
    value: "1200 sqft",
  },
];

const PropertyFeatures = () => {
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
