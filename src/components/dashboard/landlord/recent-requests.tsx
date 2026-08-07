import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const requests = [
  {
    tenant: "John Doe",
    property: "Modern Apartment",
    status: "Pending",
  },

  {
    tenant: "Sarah Smith",
    property: "Luxury Villa",
    status: "Approved",
  },
];

const RecentRequests = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Rental Requests</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {requests.map((request) => (
          <div
            key={request.tenant}
            className="flex items-center justify-between rounded-lg border p-3"
          >
            <div>
              <p className="font-medium">{request.tenant}</p>

              <p className="text-muted-foreground text-sm">
                {request.property}
              </p>
            </div>

            <span className="text-sm font-medium">{request.status}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentRequests;
