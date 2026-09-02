"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

import { cancelRequest } from "@/services/rental-request.client";
import { useRouter } from "next/navigation";

type Props = {
  requestId: string;
};

const CancelRequestButton = ({ requestId }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleCancelRequest = async () => {
    try {
      setIsLoading(true);

      await cancelRequest(requestId);
      router.refresh();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleCancelRequest}
      variant={"destructive"}
      disabled={isLoading}
      className="min-w-24"
    >
      {isLoading ? <Spinner /> : "Cancel"}
    </Button>
  );
};

export default CancelRequestButton;
