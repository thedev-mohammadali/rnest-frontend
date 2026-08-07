"use client";

import { Button } from "@/components/ui/button";

type Props = {
  status: "PENDING" | "APPROVED" | "REJECTED";
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
