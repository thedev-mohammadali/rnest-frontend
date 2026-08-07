import { currentUser } from "@/lib/mock-user";

import LandlordRequests from "../landlord/requests/landlord-requests";
import TenantRequests from "../tenant/requests/tenant-requests";

const RequestsRouter = () => {
  switch (currentUser.role) {
    case "TENANT":
      return <TenantRequests />;

    case "LANDLORD":
      return <LandlordRequests />;

    default:
      return null;
  }
};

export default RequestsRouter;
