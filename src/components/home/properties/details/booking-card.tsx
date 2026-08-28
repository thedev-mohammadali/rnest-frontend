"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/formatter/currency";
import { User } from "@/types/auth";
import { Property } from "@/types/property";
import { useRouter } from "next/navigation";
import { useState } from "react";
import BookingModal from "./booking-modal";
import DatePicker from "./date-picker";
import DurationSelect from "./duration-select";

type Props = {
  property: Property;
  user: User | null;
};

const BookingCard = ({ property, user }: Props) => {
  const [moveInDate, setMoveInDate] = useState<Date | undefined>();
  const [duration, setDuration] = useState<number>(12);
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const isOwner = user?.id === property.landlordId;
  const disabled = !moveInDate || isOwner;

  const handleBooking = () => {
    if (!user) {
      router.push(
        `/login?callbackUrl=${encodeURIComponent(window.location.pathname)}`,
      );

      return;
    }

    if (user.id === property.landlordId) {
      return;
    }

    setOpen(true);
  };

  return (
    <>
      <Card>
        <CardContent className="space-y-6 p-6">
          <div>
            <p className="text-3xl font-bold">
              {formatCurrency(property.rent, "BDT")}
              <span className="text-muted-foreground text-base font-normal">
                {" "}
                / month
              </span>
            </p>
          </div>

          <div>
            <span
              className={`rounded-full px-3 py-1 text-sm font-medium ${
                property.isAvailable
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {property.isAvailable ? "Available" : "Rented"}
            </span>
          </div>

          <div className="border-t" />

          <div className="space-y-2">
            <p className="text-sm font-medium">Move-in date</p>

            <DatePicker value={moveInDate} onChange={setMoveInDate} />
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Rental duration</p>

            <DurationSelect value={duration} onChange={setDuration} />
          </div>

          <Button
            className="w-full"
            disabled={disabled}
            onClick={handleBooking}
          >
            {isOwner ? "You own this property" : "Request Booking"}
          </Button>

          <p className="text-muted-foreground text-center text-xs">
            No payment required. The landlord will review your request.
          </p>
        </CardContent>
      </Card>

      <BookingModal
        open={open}
        onOpenChange={setOpen}
        moveInDate={moveInDate}
        duration={duration}
      />
    </>
  );
};

export default BookingCard;
