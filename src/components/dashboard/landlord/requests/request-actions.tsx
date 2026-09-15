"use client";

import { Button } from "@/components/ui/button";
import { RentalRequestStatus } from "@/types/rental-requests";

type Props = {
  status: RentalRequestStatus;
};

const RequestActions = ({ status }: Props) => {
  if (status === "PENDING") {
    return (
      <div className="flex gap-2">
        <Button>Approve</Button>

        <Button variant="destructive">Reject</Button>
      </div>
    );
  }

  if (status === "APPROVED") {
    return <Button variant="outline">View Agreement</Button>;
  }

  return null;
};

export default RequestActions;
