import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const activities = [
  "New user registered",

  "New property added",

  "Agreement created",

  "Payment completed",
];

const RecentActivity = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="space-y-3">
          {activities.map((activity) => (
            <div key={activity} className="rounded-lg border p-3">
              {activity}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
