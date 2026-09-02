import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/formatter/currency";
import { formatDate } from "@/lib/formatter/date";
import { RentalAgreement } from "@/types/rental-agreement";
import { CreditCard, Home, MapPin } from "lucide-react";
import Link from "next/link";
import AgreementStatusBadge from "./agreements/agreement-status-badge";
import PayNowButton from "./payments/pay-button";

type Props = {
  agreement: RentalAgreement;
};

const PaymentCard = ({ agreement }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pending Payment</CardTitle>
      </CardHeader>

      {agreement ? (
        <CardContent className="space-y-5">
          <div>
            <h3 className="flex items-center gap-1">
              <Home className="size-4" />
              {agreement.property.title}
            </h3>

            <p className="text-muted-foreground flex gap-1">
              <MapPin className="size-4" />
              {agreement.property.location}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-muted-foreground text-sm">Monthly Rent</p>

              <p className="font-bold">
                {formatCurrency(agreement.property.rent, "BDT")}
              </p>
            </div>

            <div className="flex gap-1">
              <p className="text-muted-foreground text-sm">Status:</p>

              <AgreementStatusBadge status={agreement.status} />
            </div>
          </div>

          <div>
            <p className="text-muted-foreground text-sm">Lease Period</p>

            <p>
              {formatDate(agreement.leaseStartDate)} -{" "}
              {formatDate(agreement.leaseEndDate)}
            </p>
          </div>

          {agreement.status === "PENDING_PAYMENT" && (
            <PayNowButton rentalAgreementId={agreement.id} />
          )}
        </CardContent>
      ) : (
        <CardContent className="flex flex-col items-center justify-center py-10 text-center">
          <CreditCard className="text-muted-foreground mb-4 size-10" />

          <h3 className="font-semibold">No Pending Payment</h3>

          <p className="text-muted-foreground mt-2 text-sm">
            You don&apos;t have any rental payments waiting for payment.
          </p>

          <Button asChild className="mt-6">
            <Link href="/dashboard/agreements">View Rental Agreements</Link>
          </Button>
        </CardContent>
      )}
    </Card>
  );
};

export default PaymentCard;
