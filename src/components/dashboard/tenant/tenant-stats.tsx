import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type stat = {
  title: string;
  value: string;
};

type Props = {
  stats: stat[];
};

const TenantStats = ({ stats }: Props) => {
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
