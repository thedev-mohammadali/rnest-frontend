import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/formatter/currency";
import { getMyProperties } from "@/services/property.service";
import { getMonthlyRevenue } from "@/services/rental-agreement.service";
import { getPendingRequests } from "@/services/rental-request.service";

const LandlordStats = async () => {
  const { totalProperties, availableProperties } = await getMyProperties();
  const { meta } = await getPendingRequests();
  const monthlyRevenue = await getMonthlyRevenue();

  const stats = [
    {
      title: "Total Properties",
      value: totalProperties,
    },

    {
      title: "Available Properties",
      value: availableProperties,
    },

    {
      title: "Pending Requests",
      value: meta.total,
    },

    {
      title: "Monthly Revenue",
      value: formatCurrency(monthlyRevenue, "BDT"),
    },
  ];

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
