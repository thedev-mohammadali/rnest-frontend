import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/formatter/currency";
import { formatDateTime } from "@/lib/formatter/date";
import { getAllPayments } from "@/services/payment.server";
import { CreditCard } from "lucide-react";

import PayNowButton from "./pay-button";
import PaymentStatusBadge from "./payment-status-badge";

const PaymentHistory = async () => {
  const { payments } = await getAllPayments();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment History</CardTitle>
      </CardHeader>

      <CardContent>
        {payments.length > 0 ? (
          <div className="divide-y">
            {payments.map((payment) => (
              <div
                key={payment.id}
                className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="bg-muted flex size-10 shrink-0 items-center justify-center rounded-lg">
                    <CreditCard className="text-muted-foreground size-5" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-medium">
                      {formatDateTime(
                        payment.status === "PAID" && payment.paidAt
                          ? payment.paidAt
                          : payment.createdAt,
                      )}
                    </p>

                    <p className="text-muted-foreground mt-0.5 text-xs">
                      Rental payment
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-4">
                  <div className="text-right">
                    <p className="font-semibold">
                      {formatCurrency(payment.amount, "BDT")}
                    </p>

                    <div className="mt-1">
                      <PaymentStatusBadge status={payment.status} />
                    </div>
                  </div>

                  {payment.status === "PENDING" && (
                    <PayNowButton
                      rentalAgreementId={payment.rentalAgreementId}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <div className="bg-muted mb-4 flex size-12 items-center justify-center rounded-full">
              <CreditCard className="text-muted-foreground size-6" />
            </div>

            <h3 className="font-semibold">No Payment History</h3>

            <p className="text-muted-foreground mt-2 text-sm">
              You don&apos;t have any rental payments yet.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PaymentHistory;
