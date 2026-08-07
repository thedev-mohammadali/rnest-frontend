import LandlordAgreementList from "./landlord-agreement-list";

const LandlordAgreements = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Rental Agreements</h1>

        <p className="text-muted-foreground">
          Manage your active rental agreements
        </p>
      </div>

      <LandlordAgreementList />
    </div>
  );
};

export default LandlordAgreements;
