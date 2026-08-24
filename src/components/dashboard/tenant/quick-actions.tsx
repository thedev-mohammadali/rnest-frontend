import { Button } from "@/components/ui/button";
import Link from "next/link";

const QuickActions = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <Button>
        <Link href={"/properties"}>Browse Properties</Link>
      </Button>

      <Button variant="outline" asChild>
        <Link href={"/dashboard/requests"}>View Requests</Link>
      </Button>

      <Button variant="outline" asChild>
        <Link href={"/dashboard/profile"}>Update Profile</Link>
      </Button>
    </div>
  );
};

export default QuickActions;
