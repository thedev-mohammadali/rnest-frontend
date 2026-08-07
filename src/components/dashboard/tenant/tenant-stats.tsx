import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  {
    title: "Rental Requests",
    value: "2",
  },

  {
    title: "Active Agreements",
    value: "1",
  },

  {
    title: "Payments Due",
    value: "৳25,000",
  },
];

const TenantStats = () => {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stats.map((item) => (
        <Card key={item.title}>
          <CardHeader>
            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-2xl font-bold">{item.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TenantStats;
