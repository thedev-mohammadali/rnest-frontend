import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { formatDate } from "@/lib/formatter/date";
import { RentalAgreement } from "@/types/rental-agreement";
import AgreementStatusBadge from "./agreement-status-badge";

type Props = {
  agreement: RentalAgreement;
};

const LandlordAgreementCard = ({ agreement }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{agreement.property.title}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        <div>
          <p className="text-muted-foreground text-sm">Tenant</p>

          <p className="font-medium">{agreement.tenant.name}</p>
        </div>

        <div>
          <p className="text-muted-foreground text-sm">Monthly Rent</p>

          <p className="font-bold">৳{agreement.property.rent}</p>
        </div>

        <div>
          <p className="text-muted-foreground text-sm">Lease Period</p>

          <p>
            {formatDate(agreement.leaseStartDate)} -{" "}
            {formatDate(agreement.leaseEndDate)}
          </p>
        </div>

        <AgreementStatusBadge status={agreement.status} />

        <Button variant="outline">View Details</Button>
      </CardContent>
    </Card>
  );
};

export default LandlordAgreementCard;
