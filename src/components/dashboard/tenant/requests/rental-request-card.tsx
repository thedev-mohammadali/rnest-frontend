"use client";

import { Card, CardContent } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import Link from "next/link";

import RequestStatusBadge from "./request-status-badge";

type Props = {
  request: {
    id: string;
    property: string;
    location: string;
    rent: number;
    status: "PENDING" | "APPROVED" | "REJECTED" | "CANCELLED";
    date: string;
  };
};

const RentalRequestCard = ({ request }: Props) => {
  const handleCancel = () => {
    console.log("Cancel request", request.id);
  };

  return (
    <Card>
      <CardContent className="flex flex-col gap-5 p-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">{request.property}</h3>

          <p className="text-muted-foreground">📍 {request.location}</p>

          <p className="font-medium">৳{request.rent}/month</p>

          <p className="text-muted-foreground text-sm">
            Requested on {request.date}
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 md:items-end">
          <RequestStatusBadge status={request.status} />

          <div className="flex gap-2">
            <Button variant="outline" asChild>
              <Link href={`/properties/${request.id}`}>View Property</Link>
            </Button>

            {request.status === "PENDING" && (
              <Button variant="destructive" onClick={handleCancel}>
                Cancel
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RentalRequestCard;
