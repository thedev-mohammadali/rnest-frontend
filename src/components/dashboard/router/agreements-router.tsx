import { currentUser } from "@/lib/mock-user";

import LandlordAgreements from "../landlord/agreements/landlord-agreements";
import TenantAgreements from "../tenant/agreements/tenant-agreements";

const AgreementsRouter = () => {
  switch (currentUser.role) {
    case "TENANT":
      return <TenantAgreements />;

    case "LANDLORD":
      return <LandlordAgreements />;

    default:
      return null;
  }
};

export default AgreementsRouter;
