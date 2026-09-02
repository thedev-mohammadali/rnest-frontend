import { getCurrentUser } from "@/services/auth/auth.server";
import LandlordPayments from "../landlord/payments/landlord-payments";
import TenantPayments from "../tenant/payments/tenant-payments";

const PaymentsRouter = async () => {
  const user = await getCurrentUser();

  switch (user?.role) {
    case "TENANT":
      return <TenantPayments />;

    case "LANDLORD":
      return <LandlordPayments />;

    default:
      return null;
  }
};

export default PaymentsRouter;
