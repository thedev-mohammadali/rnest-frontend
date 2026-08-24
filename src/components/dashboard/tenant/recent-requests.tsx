import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RentalRequest } from "@/types/dashboard";

type Props = {
  requests: RentalRequest[];
};

const RecentRequests = async ({ requests }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Requests</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="space-y-3">
          {requests.map((request) => (
            <div key={request.id} className="flex justify-between">
              <span>{request.property.title}</span>

              <span>{request.status}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentRequests;
