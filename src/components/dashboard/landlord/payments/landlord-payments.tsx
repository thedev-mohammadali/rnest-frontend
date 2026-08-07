import EarningsCard from "./earnings-card";
import PaymentHistory from "./payment-history";

const LandlordPayments = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Payments</h1>

        <p className="text-muted-foreground">
          Track your rental income and payment history
        </p>
      </div>

      <EarningsCard />

      <PaymentHistory />
    </div>
  );
};

export default LandlordPayments;
