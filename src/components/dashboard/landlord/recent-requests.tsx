import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDateTime } from "@/lib/formatter/date";
import { getMyRentalRequests } from "@/services/rental-request.service";
import { ClipboardList, Clock3, Home, UserRound } from "lucide-react";
import RequestStatusBadge from "./requests/request-status-badge";

const RecentRequests = async () => {
  const { data: requests } = await getMyRentalRequests(2);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Rental Requests</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {requests.length > 0 ? (
          <div className="space-y-2">
            {requests.map((request) => (
              <div
                key={request.id}
                className="flex items-center justify-between gap-4 rounded-lg border p-3"
              >
                <div className="min-w-0 space-y-1">
                  <p className="flex items-center gap-1.5 truncate font-medium">
                    <UserRound className="text-muted-foreground size-3.5 shrink-0" />
                    {request.tenant.name}
                  </p>

                  <p className="text-muted-foreground flex items-center gap-1.5 truncate text-sm">
                    <Home className="size-3.5 shrink-0" />
                    {request.property.title}
                  </p>

                  <p className="text-muted-foreground flex items-center gap-1.5 text-xs">
                    <Clock3 className="size-3.5 shrink-0" />
                    {formatDateTime(request.createdAt)}
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  {request.status === "PENDING" ? (
                    <>
                      <Button size="sm">Approve</Button>

                      <Button size="sm" variant="outline">
                        Reject
                      </Button>
                    </>
                  ) : (
                    <RequestStatusBadge status={request.status} />
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <div className="bg-muted mb-4 flex size-12 items-center justify-center rounded-full">
              <ClipboardList className="text-muted-foreground size-6" />
            </div>

            <h3 className="font-semibold">No Rental Requests</h3>

            <p className="text-muted-foreground mt-2 text-sm">
              You don&apos;t have any rental requests yet.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RecentRequests;
