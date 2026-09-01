import { getMyRentalAgreements } from "@/services/rental-agreement.service";
import { RentalAgreementResponse } from "@/types/rental-agreement";
import AgreementCard from "./agreement-card";

const AgreementList = async () => {
  const agreementResponse: RentalAgreementResponse =
    await getMyRentalAgreements();
  const agreements = agreementResponse.data;

  return (
    <div className="space-y-4">
      {agreements.map((agreement) => (
        <AgreementCard key={agreement.id} agreement={agreement} />
      ))}
    </div>
  );
};

export default AgreementList;
