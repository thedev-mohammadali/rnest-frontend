import { getMyRentalAgreements } from "@/services/rental-agreement.service";
import AgreementCard from "./agreement-card";

const AgreementList = async () => {
  const { agreements } = await getMyRentalAgreements();

  return (
    <div className="space-y-4">
      {agreements.map((agreement) => (
        <AgreementCard key={agreement.id} agreement={agreement} />
      ))}
    </div>
  );
};

export default AgreementList;
