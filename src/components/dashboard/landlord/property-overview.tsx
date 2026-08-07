import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const properties = [
  {
    name: "Modern Apartment",
    location: "Dhaka",
    rent: "৳25,000",
    status: "Available",
  },

  {
    name: "Luxury Villa",
    location: "Chittagong",
    rent: "৳40,000",
    status: "Rented",
  },
];

const PropertyOverview = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Properties</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {properties.map((property) => (
          <div key={property.name} className="rounded-lg border p-3">
            <div className="flex justify-between">
              <p className="font-medium">{property.name}</p>

              <span className="text-sm">{property.status}</span>
            </div>

            <p className="text-muted-foreground text-sm">{property.location}</p>

            <p className="mt-2 font-semibold">{property.rent}/month</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default PropertyOverview;
