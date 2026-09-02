"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

import { checkout } from "@/services/payment.client";

type Props = {
  rentalAgreementId: string;
};

const PayNowButton = ({ rentalAgreementId }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setIsLoading(true);

      const checkOutUrl = await checkout(rentalAgreementId);

      window.location.href = checkOutUrl;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button onClick={handlePayment} disabled={isLoading} className="min-w-20">
      {isLoading ? <Spinner /> : "Pay Now"}
    </Button>
  );
};

export default PayNowButton;
