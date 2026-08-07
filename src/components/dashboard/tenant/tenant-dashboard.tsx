import CurrentRentalCard from "./current-rental-card";
import PaymentCard from "./payment-card";
import QuickActions from "./quick-actions";
import RecentRequests from "./recent-requests";
import TenantStats from "./tenant-stats";

const TenantDashboard = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Welcome back, Ali 👋</h1>

        <p className="text-muted-foreground">Here is your rental overview</p>
      </div>

      <TenantStats />

      <div className="grid gap-6 lg:grid-cols-2">
        <CurrentRentalCard />

        <PaymentCard />
      </div>

      <RecentRequests />

      <QuickActions />
    </div>
  );
};

export default TenantDashboard;
