import PaymentHistory from "@/components/dashboard/tenant/payments/payment-history";
import UpcomingPayment from "@/components/dashboard/tenant/payments/upcoming-payment";

const PaymentsPage = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Payments</h1>

        <p className="text-muted-foreground">Manage your rent payments</p>
      </div>

      <UpcomingPayment />

      <PaymentHistory />
    </div>
  );
};

export default PaymentsPage;
