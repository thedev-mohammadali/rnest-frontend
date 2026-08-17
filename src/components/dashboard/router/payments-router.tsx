"use client";

import { useAuth } from "@/hooks/useAuth";
import LandlordPayments from "../landlord/payments/landlord-payments";
import TenantPayments from "../tenant/payments/tenant-payments";

const PaymentsRouter = () => {
  const { user } = useAuth();

  switch (user.role) {
    case "TENANT":
      return <TenantPayments />;

    case "LANDLORD":
      return <LandlordPayments />;

    default:
      return null;
  }
};

export default PaymentsRouter;
