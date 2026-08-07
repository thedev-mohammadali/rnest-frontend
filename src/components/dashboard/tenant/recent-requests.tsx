import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RecentRequests = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Requests</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span>Modern Apartment</span>

            <span>Pending</span>
          </div>

          <div className="flex justify-between">
            <span>Luxury Villa</span>

            <span>Approved</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentRequests;
