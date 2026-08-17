"use client";

import { useAuth } from "@/hooks/useAuth";
import LandlordRequests from "../landlord/requests/landlord-requests";
import TenantRequests from "../tenant/requests/tenant-requests";

const RequestsRouter = () => {
  const { user } = useAuth();

  switch (user.role) {
    case "TENANT":
      return <TenantRequests />;

    case "LANDLORD":
      return <LandlordRequests />;

    default:
      return null;
  }
};

export default RequestsRouter;
