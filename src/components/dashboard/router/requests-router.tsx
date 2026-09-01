import { getCurrentUser } from "@/services/auth/auth.server";
import LandlordRequests from "../landlord/requests/landlord-requests";
import TenantRequests from "../tenant/requests/tenant-requests";

const RequestsRouter = async () => {
  const user = await getCurrentUser();

  switch (user?.role) {
    case "TENANT":
      return <TenantRequests />;

    case "LANDLORD":
      return <LandlordRequests />;

    default:
      return null;
  }
};

export default RequestsRouter;
