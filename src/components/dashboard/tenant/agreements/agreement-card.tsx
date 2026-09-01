import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { formatCurrency } from "@/lib/formatter/currency";
import { formatDate } from "@/lib/formatter/date";
import { RentalAgreement } from "@/types/rental-agreement";
import PayNowButton from "../payments/pay-button";
import CancelAgreementButton from "./agreement-cancel-button";
import AgreementStatusBadge from "./agreement-status-badge";

type Props = {
  agreement: RentalAgreement;
};

const AgreementCard = ({ agreement }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{agreement.property.title}</CardTitle>

        <p className="text-muted-foreground">{agreement.property.location}</p>
      </CardHeader>

      <CardContent className="space-y-5">
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

        {agreement.status === "ACTIVE" && (
          <CancelAgreementButton rentalAgreementId={agreement.id} />
        )}
      </CardContent>
    </Card>
  );
};

export default AgreementCard;
