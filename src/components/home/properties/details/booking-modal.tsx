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
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { formatDateOnly } from "@/lib/formatter/date";
import { submitRequest } from "@/services/rental-request.client";
import { useState } from "react";
import { toast } from "sonner";

type BookingModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  propertyId: string;
  moveInDate: Date;
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    setMessage(value);

    if (messageError) {
      setMessageError("");
    }
  };

  const handleSubmit = async () => {
    const trimmedMessage = message.trim();

    if (trimmedMessage.length > 0 && trimmedMessage.length < 3) {
      setMessageError("Message must be at least 3 characters");
      return;
    }

    try {
      setIsSubmitting(true);

      await submitRequest({
        propertyId,
        tenantMessage: trimmedMessage || undefined,
        requestedMoveInDate: formatDateOnly(moveInDate),
        durationInMonths: duration,
      });

      toast.success("Rental request submitted successfully", {
        position: "top-right",
        closeButton: true,
        duration: 1000,
      });

      setMessage("");
      onOpenChange(false);
    } catch (error) {
      console.log(error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to submit rental request",
        {
          position: "top-right",
          closeButton: true,
          duration: 1000,
        },
      );
    } finally {
      setIsSubmitting(false);
    }
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
                {moveInDate.toDateString()}
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
              disabled={isSubmitting}
            />

            {messageError && (
              <p className="text-destructive text-sm">{messageError}</p>
            )}
          </div>
        </div>

        <DialogFooter>
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="min-w-30"
          >
            {isSubmitting ? (
              <>
                <Spinner data-icon="inline-start" />
                Sending...
              </>
            ) : (
              "Send Request"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
