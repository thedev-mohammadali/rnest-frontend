"use client";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

const BookingModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mt-6 w-full">Request Booking</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Request this property</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <label>Move in Date</label>

            <Input type="date" />
          </div>

          <div>
            <label>Duration (months)</label>

            <Input type="number" placeholder="12" />
          </div>

          <div>
            <label>Message</label>

            <Textarea placeholder="I am interested" />
          </div>

          <Button className="w-full">Submit Request</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
