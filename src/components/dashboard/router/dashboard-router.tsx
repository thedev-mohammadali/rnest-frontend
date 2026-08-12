"use client";

import { useAuth } from "@/hooks/useAuth";
import AdminDashboard from "../admin/admin-dashboard";
import LandlordDashboard from "../landlord/landlord-dashboard";
import TenantDashboard from "../tenant/tenant-dashboard";

const DashboardRouter = () => {
  const { user } = useAuth();

  switch (user.role) {
    case "TENANT":
      return <TenantDashboard />;

    case "LANDLORD":
      return <LandlordDashboard />;

    case "ADMIN":
      return <AdminDashboard />;

    default:
      return null;
  }
};

export default DashboardRouter;
