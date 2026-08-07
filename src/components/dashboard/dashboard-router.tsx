import { currentUser } from "@/lib/mock-user";

import LandlordDashboard from "./landlord/landlord-dashboard";
import TenantDashboard from "./tenant/tenant-dashboard";

const DashboardRouter = () => {
  switch (currentUser.role) {
    case "TENANT":
      return <TenantDashboard />;

    case "LANDLORD":
      return <LandlordDashboard />;

    // case "ADMIN":
    //   return <AdminDashboard />;

    default:
      return null;
  }
};

export default DashboardRouter;
