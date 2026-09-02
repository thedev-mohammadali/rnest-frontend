import PaymentHistory from "./payment-history";

const TenantPayments = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Payments</h1>

        <p className="text-muted-foreground">Manage your rent payments</p>
      </div>

      <PaymentHistory />
    </div>
  );
};

export default TenantPayments;
