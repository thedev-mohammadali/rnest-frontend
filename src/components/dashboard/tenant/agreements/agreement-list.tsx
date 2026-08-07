import AgreementCard from "./agreement-card";

const agreements = [
  {
    id: "1",
    property: "Modern Apartment",
    location: "Dhaka, Bangladesh",
    rent: 25000,
    status: "ACTIVE" as const,
  },
];

const AgreementList = () => {
  return (
    <div className="space-y-4">
      {agreements.map((agreement) => (
        <AgreementCard key={agreement.id} agreement={agreement} />
      ))}
    </div>
  );
};

export default AgreementList;
