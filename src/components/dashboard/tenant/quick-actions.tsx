import { Button } from "@/components/ui/button";

const QuickActions = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <Button>Browse Properties</Button>

      <Button variant="outline">View Requests</Button>

      <Button variant="outline">Update Profile</Button>
    </div>
  );
};

export default QuickActions;
