"use client";

import BookingModal from "./booking-modal";

const BookingCard = () => {
  return (
    <div className="sticky top-24 rounded-2xl border p-6 shadow-sm">
      <p className="text-3xl font-bold">
        ৳25,000
        <span className="text-sm font-normal">/ month</span>
      </p>

      <p className="mt-3 text-green-600">Available</p>

      <BookingModal />
    </div>
  );
};

export default BookingCard;
