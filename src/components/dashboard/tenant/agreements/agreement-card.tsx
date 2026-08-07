import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import AgreementStatusBadge from "./agreement-status-badge";

type Props = {
  agreement: {
    id: string;
    property: string;
    location: string;
    rent: number;
    status: "ACTIVE" | "EXPIRED" | "PENDING";
  };
};

const AgreementCard = ({ agreement }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{agreement.property}</CardTitle>

        <p className="text-muted-foreground">{agreement.location}</p>
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-muted-foreground text-sm">Monthly Rent</p>

            <p className="font-bold">৳{agreement.rent}</p>
          </div>

          <div>
            <p className="text-muted-foreground text-sm">Status</p>

            <AgreementStatusBadge status={agreement.status} />
          </div>
        </div>

        <div>
          <p className="text-muted-foreground text-sm">Lease Period</p>

          <p>Jan 01, 2026 - Dec 31, 2026</p>
        </div>

        <Button>View Agreement</Button>
      </CardContent>
    </Card>
  );
};

export default AgreementCard;
