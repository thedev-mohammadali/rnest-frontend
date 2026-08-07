import LandlordAgreementCard from "./landlord-agreement-card";

const agreements = [
  {
    id: "1",
    property: "Modern Apartment",
    tenant: "John Doe",
    rent: 25000,
    status: "ACTIVE",
    duration: "Jan 01, 2026 - Dec 31, 2026",
  },
];

const LandlordAgreementList = () => {
  return (
    <div className="space-y-4">
      {agreements.map((agreement) => (
        <LandlordAgreementCard key={agreement.id} agreement={agreement} />
      ))}
    </div>
  );
};

export default LandlordAgreementList;
