import AgreementList from "@/components/dashboard/tenant/agreements/agreement-list";

const AgreementsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">My Agreements</h1>

        <p className="text-muted-foreground">
          View and manage your rental agreements
        </p>
      </div>

      <AgreementList />
    </div>
  );
};

export default AgreementsPage;
