import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DashboardPage = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Welcome back, Ali 👋</h2>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Rental Requests</CardTitle>
          </CardHeader>

          <CardContent>2</CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Agreements</CardTitle>
          </CardHeader>

          <CardContent>1</CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payments Due</CardTitle>
          </CardHeader>

          <CardContent>৳25000</CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
