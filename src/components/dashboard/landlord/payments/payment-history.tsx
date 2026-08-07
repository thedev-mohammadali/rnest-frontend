import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import PaymentStatusBadge from "./payment-status-badge";

const payments = [
  {
    id: "1",
    tenant: "John Doe",
    property: "Modern Apartment",
    amount: 25000,
    date: "Aug 01, 2026",
    status: "PAID" as const,
  },

  {
    id: "2",
    tenant: "Sarah Smith",
    property: "Luxury Villa",
    amount: 40000,
    date: "Aug 05, 2026",
    status: "PENDING" as const,
  },
];

const PaymentHistory = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment History</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {payments.map((payment) => (
            <div
              key={payment.id}
              className="flex flex-col gap-3 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-semibold">{payment.tenant}</p>

                <p className="text-muted-foreground text-sm">
                  {payment.property}
                </p>

                <p className="text-muted-foreground text-sm">{payment.date}</p>
              </div>

              <div className="flex items-center gap-4">
                <p className="font-bold">৳{payment.amount}</p>

                <PaymentStatusBadge status={payment.status} />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentHistory;
