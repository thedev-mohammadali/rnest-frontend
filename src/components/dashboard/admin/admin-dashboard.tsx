import AdminStats from "./admin-stats";
import PlatformOverview from "./platform-overview";
import QuickActions from "./quick-actions";
import RecentActivity from "./recent-activity";

const AdminDashboard = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Welcome Admin 👋</h1>

        <p className="text-muted-foreground">Here is your platform overview</p>
      </div>

      <AdminStats />

      <div className="grid gap-6 lg:grid-cols-2">
        <RecentActivity />

        <PlatformOverview />
      </div>

      <QuickActions />
    </div>
  );
};

export default AdminDashboard;
