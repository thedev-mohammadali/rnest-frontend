import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RentalAgreement } from "@/types/rental-agreement";
import Link from "next/link";

type Props = {
  currentRental: RentalAgreement;
};

const CurrentRentalCard = ({ currentRental }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Rental</CardTitle>
      </CardHeader>

      {currentRental ? (
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
        </CardContent>
      ) : (
        <CardContent className="flex flex-col items-center justify-center py-10 text-center">
          <div className="space-y-2">
            <h3 className="font-semibold">No Current Rental</h3>

            <p className="text-muted-foreground text-sm">
              You don&apos;t have an active rental agreement yet.
            </p>
          </div>

          <Button asChild className="mt-6">
            <Link href="/properties">Browse Properties</Link>
          </Button>
        </CardContent>
      )}
    </Card>
  );
};

export default CurrentRentalCard;
