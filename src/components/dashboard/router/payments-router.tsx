import { currentUser } from "@/lib/mock-user";

import LandlordPayments from "../landlord/payments/landlord-payments";
import TenantPayments from "../tenant/payments/tenant-payments";

const PaymentsRouter = () => {
  switch (currentUser.role) {
    case "TENANT":
      return <TenantPayments />;

    case "LANDLORD":
      return <LandlordPayments />;

    default:
      return null;
  }
};

export default PaymentsRouter;
