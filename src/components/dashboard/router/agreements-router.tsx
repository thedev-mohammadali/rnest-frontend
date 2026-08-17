"use client";

import { useAuth } from "@/hooks/useAuth";
import LandlordAgreements from "../landlord/agreements/landlord-agreements";
import TenantAgreements from "../tenant/agreements/tenant-agreements";

const AgreementsRouter = () => {
  const { user } = useAuth();

  switch (user.role) {
    case "TENANT":
      return <TenantAgreements />;

    case "LANDLORD":
      return <LandlordAgreements />;

    default:
      return null;
  }
};

export default AgreementsRouter;
