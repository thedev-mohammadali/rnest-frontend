import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/formatter/currency";
import { formatDate } from "@/lib/formatter/date";
import { RentalAgreement } from "@/types/rental-agreement";
import { Home, MapPin } from "lucide-react";
import Link from "next/link";

type Props = {
  currentRental: RentalAgreement | null;
};

const CurrentRentalCard = ({ currentRental }: Props) => {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Current Rental</CardTitle>

        {currentRental && (
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
            Active
          </span>
        )}
      </CardHeader>

      {currentRental ? (
        <CardContent className="flex flex-1 flex-col justify-between gap-6">
          <div className="flex items-start gap-3">
            <div className="bg-muted flex size-11 shrink-0 items-center justify-center rounded-lg">
              <Home className="size-5" />
            </div>

            <div className="min-w-0">
              <h3 className="truncate font-semibold">
                {currentRental.property.title}
              </h3>

              <p className="text-muted-foreground mt-1 flex items-center gap-1 text-sm">
                <MapPin className="size-3.5 shrink-0" />
                {currentRental.property.location}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-muted-foreground text-xs font-medium">
                Monthly Rent
              </p>

              <p className="mt-1 text-xl font-bold">
                {formatCurrency(currentRental.property.rent, "BDT")}
              </p>

              <p className="text-muted-foreground mt-0.5 text-xs">per month</p>
            </div>

            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-muted-foreground text-xs font-medium">
                Lease Period
              </p>

              <p className="mt-1 font-semibold">
                {formatDate(currentRental.leaseStartDate)}
              </p>

              <p className="text-muted-foreground text-xs">
                to {formatDate(currentRental.leaseEndDate)}
              </p>
            </div>
          </div>

          <Button asChild className="w-full">
            <Link href="/dashboard/agreements">View All Agreements</Link>
          </Button>
        </CardContent>
      ) : (
        <CardContent className="flex flex-1 flex-col items-center justify-center py-10 text-center">
          <div className="bg-muted mb-4 flex size-12 items-center justify-center rounded-full">
            <Home className="text-muted-foreground size-6" />
          </div>

          <h3 className="font-semibold">No Current Rental</h3>

          <p className="text-muted-foreground mt-2 max-w-sm text-sm">
            You don&apos;t have an active rental agreement yet.
          </p>

          <Button asChild className="mt-6">
            <Link href="/properties">Browse Properties</Link>
          </Button>
        </CardContent>
      )}
    </Card>
  );
};

export default CurrentRentalCard;
