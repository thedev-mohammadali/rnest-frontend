"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import BookingModal from "./booking-modal";
import DatePicker from "./date-picker";
import DurationSelect from "./duration-select";

const BookingCard = () => {
  const [moveInDate, setMoveInDate] = useState<Date | undefined>();
  const [duration, setDuration] = useState<number>(12);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card>
        <CardContent className="space-y-6 p-6">
          <div>
            <p className="text-3xl font-bold">
              ৳25,000
              <span className="text-muted-foreground text-base font-normal">
                {" "}
                / month
              </span>
            </p>
          </div>

          <div>
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              Available
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
            disabled={!moveInDate}
            onClick={() => setOpen(true)}
          >
            Request Booking
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
