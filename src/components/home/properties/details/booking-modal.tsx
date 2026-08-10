"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

type BookingModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  moveInDate?: Date;
  duration: number;
};

const BookingModal = ({
  open,
  onOpenChange,
  moveInDate,
  duration,
}: BookingModalProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const payload = {
      tenantMessage: message,
      requestedMoveInDate: moveInDate,
      durationInMonths: duration,
    };

    console.log(payload);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Request Booking</DialogTitle>

          <DialogDescription>
            Send a rental request to the landlord.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="bg-muted space-y-3 rounded-lg p-4">
            <div>
              <p className="text-sm font-medium">Move-in date</p>

              <p className="text-muted-foreground text-sm">
                {moveInDate?.toDateString()}
              </p>
            </div>

            <div>
              <p className="text-sm font-medium">Rental duration</p>

              <p className="text-muted-foreground text-sm">{duration} months</p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Message to landlord</p>

            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell the landlord about yourself..."
            />
          </div>
        </div>

        <DialogFooter>
          <Button onClick={handleSubmit}>Send Request</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
