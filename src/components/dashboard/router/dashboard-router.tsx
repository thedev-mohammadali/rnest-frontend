import { getCurrentUser } from "@/services/auth/auth.server";
import AdminDashboard from "../admin/admin-dashboard";
import LandlordDashboard from "../landlord/landlord-dashboard";
import TenantDashboard from "../tenant/tenant-dashboard";

const DashboardRouter = async () => {
  const user = await getCurrentUser();

  switch (user?.role) {
    case "TENANT":
      return <TenantDashboard user={user} />;

    case "LANDLORD":
      return <LandlordDashboard user={user} />;

    case "ADMIN":
      return <AdminDashboard user={user} />;

    default:
      return null;
  }
};

export default DashboardRouter;
