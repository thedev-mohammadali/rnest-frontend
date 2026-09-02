import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RentalRequest } from "@/types/dashboard";
import { Home } from "lucide-react";

type Props = {
  requests: RentalRequest[];
};

const RecentRequests = ({ requests }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Requests</CardTitle>
      </CardHeader>

      <CardContent>
        {requests.length > 0 ? (
          <div className="divide-y">
            {requests.map((request) => (
              <div
                key={request.id}
                className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="bg-muted flex size-9 shrink-0 items-center justify-center rounded-lg">
                    <Home className="text-muted-foreground size-4" />
                  </div>

                  <span className="truncate text-sm font-medium">
                    {request.property.title}
                  </span>
                </div>

                <span className="bg-muted rounded-full px-3 py-1 text-xs font-medium">
                  {request.status}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <div className="bg-muted mb-4 flex size-12 items-center justify-center rounded-full">
              <Home className="text-muted-foreground size-6" />
            </div>

            <h3 className="font-semibold">No Recent Requests</h3>

            <p className="text-muted-foreground mt-2 text-sm">
              You haven&apos;t submitted any rental requests yet.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RecentRequests;
