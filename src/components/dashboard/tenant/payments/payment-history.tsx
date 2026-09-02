import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/formatter/currency";
import { formatDateTime } from "@/lib/formatter/date";
import { getAllPayments } from "@/services/payment.server";
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
        <div className="space-y-4">
          {payments.map((payment) => (
            <div key={payment.id} className="flex justify-between">
              <div>
                <p>{formatDateTime(payment.updatedAt)}</p>

                <p className="text-muted-foreground">
                  {formatCurrency(payment.amount, "BDT")}
                </p>
              </div>

              <div className="flex items-center gap-1">
                <PaymentStatusBadge status={payment.status} />
                {payment.status === "PENDING" && (
                  <PayNowButton rentalAgreementId={payment.rentalAgreementId} />
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentHistory;
