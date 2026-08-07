import { Button } from "@/components/ui/button";
import Link from "next/link";

const QuickActions = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <Button asChild>
        <Link href="/dashboard/properties/create">Add Property</Link>
      </Button>

      <Button variant="outline" asChild>
        <Link href="/dashboard/requests">Manage Requests</Link>
      </Button>

      <Button variant="outline" asChild>
        <Link href="/dashboard/payments">View Payments</Link>
      </Button>
    </div>
  );
};

export default QuickActions;
