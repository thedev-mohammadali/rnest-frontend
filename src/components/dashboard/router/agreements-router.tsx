import { getCurrentUser } from "@/services/auth/auth.server";
import LandlordAgreements from "../landlord/agreements/landlord-agreements";
import TenantAgreements from "../tenant/agreements/tenant-agreements";

const AgreementsRouter = async () => {
  const user = await getCurrentUser();

  switch (user?.role) {
    case "TENANT":
      return <TenantAgreements />;

    case "LANDLORD":
      return <LandlordAgreements />;

    default:
      return null;
  }
};

export default AgreementsRouter;
