"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

import { terminateAgreement } from "@/services/rental-agrement.client";
import { useRouter } from "next/navigation";

type Props = {
  rentalAgreementId: string;
};

const CancelAgreementButton = ({ rentalAgreementId }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handlePayment = async () => {
    try {
      setIsLoading(true);

      await terminateAgreement(rentalAgreementId);
      router.refresh();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant={"destructive"}
      onClick={handlePayment}
      disabled={isLoading}
      className="min-w-20"
    >
      {isLoading ? <Spinner /> : "Terminate"}
    </Button>
  );
};

export default CancelAgreementButton;
