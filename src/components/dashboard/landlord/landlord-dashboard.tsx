import { User } from "@/types/auth";
import LandlordStats from "./landlord-stats";
import PropertyOverview from "./property-overview";
import QuickActions from "./quick-actions";
import RecentRequests from "./recent-requests";

type Props = {
  user: User;
};

const LandlordDashboard = ({ user }: Props) => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Welcome back, {user.name}</h1>

        <p className="text-muted-foreground">Here is your property overview</p>
      </div>

      <LandlordStats />

      <div className="grid gap-6 lg:grid-cols-2">
        <RecentRequests />

        <PropertyOverview />
      </div>

      <QuickActions />
    </div>
  );
};

export default LandlordDashboard;
