import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PaymentStatusBadge from "./payment-status-badge";

const PaymentHistory = () => {
  const payments = [
    {
      date: "Aug 01",
      amount: "৳25,000",
      status: "Paid",
    },
    {
      date: "Jul 01",
      amount: "৳25,000",
      status: "Paid",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment History</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {payments.map((payment) => (
            <div key={payment.date} className="flex justify-between">
              <div>
                <p>{payment.date}</p>

                <p className="text-muted-foreground">{payment.amount}</p>
              </div>

              <PaymentStatusBadge status={payment.status} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentHistory;
