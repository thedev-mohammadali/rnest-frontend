"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

type BookingModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  propertyId: string;
  moveInDate?: Date;
  duration: number;
};

const BookingModal = ({
  open,
  onOpenChange,
  propertyId,
  moveInDate,
  duration,
}: BookingModalProps) => {
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    setMessage(value);

    if (messageError) {
      setMessageError("");
    }
  };

  const handleSubmit = () => {
    const trimmedMessage = message.trim();

    if (trimmedMessage.length > 0 && trimmedMessage.length < 3) {
      setMessageError("Message must be at least 3 characters");
      return;
    }

    const payload = {
      propertyId,
      tenantMessage: trimmedMessage || undefined,
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
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Message to landlord</p>

              <p className="text-muted-foreground text-xs">Optional</p>
            </div>

            <Textarea
              value={message}
              onChange={handleMessageChange}
              placeholder="Tell the landlord about yourself..."
              aria-invalid={!!messageError}
            />

            {messageError && (
              <p className="text-destructive text-sm">{messageError}</p>
            )}
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
