import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import AgreementStatusBadge from "./agreement-status-badge";

type Props = {
  agreement: {
    property: string;
    tenant: string;
    rent: number;
    status: "ACTIVE" | "EXPIRED" | "PENDING";
    duration: string;
  };
};

const LandlordAgreementCard = ({ agreement }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{agreement.property}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        <div>
          <p className="text-muted-foreground text-sm">Tenant</p>

          <p className="font-medium">{agreement.tenant}</p>
        </div>

        <div>
          <p className="text-muted-foreground text-sm">Monthly Rent</p>

          <p className="font-bold">৳{agreement.rent}</p>
        </div>

        <div>
          <p className="text-muted-foreground text-sm">Lease Period</p>

          <p>{agreement.duration}</p>
        </div>

        <AgreementStatusBadge status={agreement.status} />

        <Button variant="outline">View Details</Button>
      </CardContent>
    </Card>
  );
};

export default LandlordAgreementCard;
