import { Button } from "@/components/ui/button";
import Link from "next/link";

const QuickActions = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <Button asChild>
        <Link href="/dashboard/users">Manage Users</Link>
      </Button>

      <Button variant="outline" asChild>
        <Link href="/dashboard/properties">Manage Properties</Link>
      </Button>

      <Button variant="outline" asChild>
        <Link href="/dashboard/categories">Manage Categories</Link>
      </Button>
    </div>
  );
};

export default QuickActions;
