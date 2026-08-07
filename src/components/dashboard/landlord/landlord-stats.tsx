import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  {
    title: "Total Properties",
    value: "12",
  },

  {
    title: "Available Properties",
    value: "5",
  },

  {
    title: "Rental Requests",
    value: "8",
  },

  {
    title: "Monthly Revenue",
    value: "৳120,000",
  },
];

const LandlordStats = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader>
            <CardTitle className="text-muted-foreground text-sm font-medium">
              {stat.title}
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-2xl font-bold">{stat.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default LandlordStats;
