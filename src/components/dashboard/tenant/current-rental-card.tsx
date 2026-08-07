import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

const CurrentRentalCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Rental</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold">Modern Apartment</h3>

          <p className="text-muted-foreground">Dhaka, Bangladesh</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-muted-foreground text-sm">Monthly Rent</p>

            <p className="font-bold">৳25,000</p>
          </div>

          <div>
            <p className="text-muted-foreground text-sm">Lease Period</p>

            <p className="font-bold">2026</p>
          </div>
        </div>

        <Button>View Agreement</Button>
      </CardContent>
    </Card>
  );
};

export default CurrentRentalCard;
